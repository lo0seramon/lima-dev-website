import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? styles.headerScrolled : styles.headerTransparent}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            dev13
          </Link>
          
          <button
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={styles.menuButtonInner}>
              <span className={isOpen ? styles.menuBarTopOpen : styles.menuBarTop}></span>
              <span className={isOpen ? styles.menuBarMiddleOpen : styles.menuBarMiddle}></span>
              <span className={isOpen ? styles.menuBarBottomOpen : styles.menuBarBottom}></span>
            </div>
          </button>

          <div className={styles.desktopMenu}>
            {['Sobre', 'Projetos', 'Skills', 'Contato'].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className={styles.menuItem}
              >
                <span className={styles.menuItemText}>
                  {item}
                </span>
                <span className={styles.menuItemUnderline}></span>
              </Link>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={styles.mobileMenu}
            >
              <div className={styles.mobileMenuItems}>
                {['Sobre', 'Projetos', 'Skills', 'Contato'].map((item) => (
                  <Link
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    className={styles.mobileMenuItem}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;