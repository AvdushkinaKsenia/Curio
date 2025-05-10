import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../../assets/Logo.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/"> <img src={Logo} alt="Кьюрио" className={styles.logo}/></Link>
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