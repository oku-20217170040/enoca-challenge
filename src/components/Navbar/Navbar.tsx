import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './Navbar.module.scss';

const navLinks = [
  { href: '#features', label: 'Özellikler' },
  { href: '#pricing', label: 'Fiyatlandırma' },
  { href: '#faq', label: 'SSS' },
  { href: '#contact', label: 'İletişim' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll'da navbar'a gölge ekle
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menü açıkken ESC ile kapat
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    // <header> semantik — sayfanın başlık bölgesi
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} container`} aria-label="Ana navigasyon">
        <a href="#" className={styles.logo} aria-label="Ana sayfaya git">
          <span className={styles.logoIcon} aria-hidden="true">◆</span>
          <span>Enoca</span>
        </a>

        {/* Desktop nav linkleri */}
        <ul className={styles.navList} role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          {/* Tema toggle butonu */}
          <button
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Karanlık temaya geç' : 'Aydınlık temaya geç'}
            title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          >
            <span aria-hidden="true">{theme === 'light' ? '🌙' : '☀️'}</span>
          </button>

          {/* Mobil hamburger butonu */}
          {/* aria-expanded — menü açık mı kapalı mı ekran okuyucuya bildirir */}
          <button
            className={styles.menuBtn}
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`} aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobil menü */}
      {/* inert — kapalıyken içindeki tüm elemanlar hem görünmez hem focus edilemez */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
        {...(!isMenuOpen ? { inert: '' } : {})}
      >
        <ul role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.mobileLink} onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
