import React from 'react';
import styles from './Button.module.scss';

// TypeScript interface — bu bileşenin kabul ettiği prop'ları tanımlar
// Bunu yazmazsan hangi prop'ların geçerli olduğunu bilemezsin
interface ButtonProps {
  children: React.ReactNode;           // içerik: metin, ikon, her şey olabilir
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;                 // true ise %100 genişlik
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  ariaLabel?: string;                  // erişilebilirlik: ikon-only butonlar için
}

// React.FC = React Function Component — TypeScript'e bileşen tipi olduğunu söyler
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',   // default değer — prop gelmezse 'primary' olur
  size = 'md',
  fullWidth = false,
  disabled = false,
  isLoading = false,
  type = 'button',
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      className={[
        styles.button,
        styles[variant],   // CSS Modules: styles.primary, styles.secondary...
        styles[size],
        fullWidth ? styles.fullWidth : '',
        isLoading ? styles.loading : '',
      ].join(' ')}
      disabled={disabled || isLoading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={isLoading}   // ekran okuyucu "yükleniyor" der
    >
      {isLoading && (
        <span className={styles.spinner} aria-hidden="true" />
        // aria-hidden: spinner'ı ekran okuyucudan gizler (anlamsız)
      )}
      <span className={isLoading ? styles.hiddenText : ''}>{children}</span>
    </button>
  );
};

export default Button;
