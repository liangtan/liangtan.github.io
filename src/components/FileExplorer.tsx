import { useState } from 'react';
import { FiFile, FiFolderMinus, FiFolderPlus } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../routes/Routes';
import styles from './FileExplorer.module.scss';

interface FileItem {
  name: string;
  path: string;
}

const filesRoot: FileItem[] = routes.filter(route => route.level === "root");
const filesSrc: FileItem[] = routes.filter(route => route.level === "src");;

export default function FileExplorer() {
  const [srcCollapsed, setSrcCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSrc = () => setSrcCollapsed(!srcCollapsed);

  const renderFile = (file: FileItem) => {
    const isSelected = location.pathname === file.path;
    return (
      <div
        key={file.path}
        className={`${styles.file} ${isSelected ? styles.selected : ""}`}
        onClick={() => navigate(file.path)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter") navigate(file.path); }}
      >
        <FiFile className={styles.icon} />
        <span>{file.name}</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>EXPLORER</div>
      {/* directory */}
      <div>
        <div
          className={styles.folderHeader}
          onClick={toggleSrc}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter") toggleSrc(); }}
        >
          {srcCollapsed ? (
            <FiFolderPlus className={styles.icon} />
          ) : (
            <FiFolderMinus className={styles.icon} />
          )}
          <span>src</span>
        </div>
        {!srcCollapsed && (
          <div className={styles.folderContent}>
            {filesSrc.map(renderFile)}
          </div>
        )}
      </div>
      {/* files */}
      {filesRoot.map(renderFile)}
    </div>
  );
}
