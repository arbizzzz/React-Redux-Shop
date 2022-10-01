import React, { useEffect, useState } from 'react';
import MainNav from './MainNav';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <MainNav />
    </header>
  );
}
