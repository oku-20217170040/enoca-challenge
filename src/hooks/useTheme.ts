import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  // localStorage'dan kayıtlı temayı al, yoksa sistem tercihine bak
  // window.matchMedia — kullanıcının OS teması dark mı diye kontrol eder
  const getInitial = (): Theme => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitial);

  useEffect(() => {
    // data-theme attribute'u değişince _variables.scss'teki CSS vars devreye girer
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);   // sayfayı yenileyince hatırlansın
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return { theme, toggleTheme };
}
