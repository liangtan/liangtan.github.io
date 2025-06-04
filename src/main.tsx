import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './index.scss';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
