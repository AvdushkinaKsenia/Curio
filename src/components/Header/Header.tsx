import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logo}>Кьюрио</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/games" className={styles.link}>Игры</Link>
        <Link to="/categories" className={styles.link}>Категории</Link>
        <Link to="/about" className={styles.link}>О нас</Link>
      </nav>
      <div className={styles.user}>
        <div className={styles.avatar}>👦</div>
      </div>
    </header>
  );
};

export default Header;