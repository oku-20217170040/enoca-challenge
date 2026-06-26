import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = 'md' }) => {
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Modal açılınca kapat butonuna focus et — klavye erişimi
    firstFocusRef.current?.focus();

    // ESC tuşuyla kapatma
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);

    // Modal açıkken arka planın scroll'unu engelle
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    // role="dialog" + aria-modal — ekran okuyucu modal'ı anlar
    // aria-labelledby — modal başlığını ekran okuyucuya bağlar
    <div
      className={styles.overlay}
      onClick={onClose}       // overlay'e tıklayınca kapat
      role="presentation"
    >
      <div
        className={`${styles.modal} ${styles[size]}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}   // modal içine tıklayınca kapanmasın
      >
        <div className={styles.header}>
          <h2 id="modal-title" className={styles.title}>{title}</h2>
          <button
            ref={firstFocusRef}
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Modalı kapat"
          >
            ✕
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
