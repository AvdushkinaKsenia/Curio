import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../../assets/Logo.svg';
import { UserData } from '../../types/game';

interface HeaderProps {
  searchTerm?: string;
  setSearchTerm?: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Загрузка данных пользователя из localStorage
  useEffect(() => {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    if (name && age) {
      setUser({ name, age: parseInt(age) });
    }
  }, []);

  // Закрытие меню при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAvatarClick = () => setShowMenu(prev => !prev);
  const handleLogoClick = () => navigate('/games?all=true');

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img
          src={Logo}
          alt="Кьюрио"
          className={styles.logo}
          onClick={handleLogoClick}
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

      <div className={styles.right} ref={menuRef}>
        <Link to="/about" className={styles.link}>О нас</Link>
        <div
          className={styles.avatar}
          onClick={handleAvatarClick}
          title={user?.name || 'Пользователь'}
        >
          {user ? user.name.charAt(0).toUpperCase() : '👦'}
        </div>

        {/* Меню пользователя */}
        <div className={`${styles.userMenu} ${showMenu ? styles.show : ''}`}>
          {user && (
            <>
              <p><strong>Имя:</strong> {user.name}</p>
              <p><strong>Возраст:</strong> {user.age}</p>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;