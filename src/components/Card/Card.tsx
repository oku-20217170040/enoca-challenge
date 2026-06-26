import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outline' | 'highlighted';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  // Kart tıklanabilir olacaksa — erişilebilirlik için role ve tabIndex gerekli
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  onClick,
}) => {
  const isClickable = !!onClick;

  return (
    <div
      className={[
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        isClickable ? styles.clickable : '',
        className,
      ].join(' ')}
      onClick={onClick}
      // Tıklanabilir div'ler klavyeden de erişilebilir olmalı
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      } : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
