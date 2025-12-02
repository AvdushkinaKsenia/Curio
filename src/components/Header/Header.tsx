import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../../assets/Logo.svg';

interface HeaderProps {
  searchTerm?: string;
  setSearchTerm?: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/">
          <img src={Logo} alt="Кьюрио" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.center}>
        {setSearchTerm && (
          <input
            type="text"
            placeholder="Поиск игр..."
            className={styles['search-input']}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
        <nav className={styles.nav}>
          <Link to="/games" className={styles.link}>Игры</Link>
          <Link to="/categories" className={styles.link}>Категории</Link>
          <Link to="/about" className={styles.link}>О нас</Link>
        </nav>
      </div>

      <div className={styles.user}>
        <div className={styles.avatar}>👦</div>
      </div>
    </header>
  );
};

export default Header;