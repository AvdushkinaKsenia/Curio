import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../../assets/Logo.svg';

interface HeaderProps {
  searchTerm?: string;
  setSearchTerm?: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // Переход на страницу игр с параметром all=true
    navigate('/games?all=true');
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img
          src={Logo}
          alt="Кьюрио"
          className={styles.logo}
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
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
      </div>

      <div className={styles.right}>
        <Link to="/about" className={styles.link}>О нас</Link>
        <div className={styles.avatar}>👦</div>
      </div>
    </header>
  );
};

export default Header;