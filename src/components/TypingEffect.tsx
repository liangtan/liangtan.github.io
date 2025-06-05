import { useCallback, useEffect, useRef, useState, type FC } from 'react';
import { FunctionName } from './Shared';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export const TypingEffect: FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cleanupTimeout = useCallback(() => {
	if (timeoutRef.current) {
		clearTimeout(timeoutRef.current);
	}
    if (pauseTimeoutRef.current) {
		clearTimeout(pauseTimeoutRef.current);
	}
  }, []);

  useEffect(() => {
	cleanupTimeout();
    const current = texts[index % texts.length];
    if (isDeleting) {
      timeoutRef.current = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }, deletingSpeed);
    } else {
      if (text === current) {
        pauseTimeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timeoutRef.current = setTimeout(() => {
          setText((prev) => current.slice(0, prev.length + 1));
        }, typingSpeed);
      }
    }

    // Clean up both timeouts on every effect cycle
    return () => cleanupTimeout();
  }, [text, isDeleting, texts, index, typingSpeed, deletingSpeed, pauseTime, cleanupTimeout]);

  return (
      <FunctionName>{text}</FunctionName>
  );
};
