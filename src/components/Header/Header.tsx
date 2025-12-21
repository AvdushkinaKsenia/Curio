import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import { UserData } from "../../types/game";

interface HeaderProps {
  searchTerm?: string;
  setSearchTerm?: (value: string) => void;
  onSearch?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  onSearch
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* ---------- Загрузка пользователя ---------- */
  useEffect(() => {
    const name = localStorage.getItem("userName");
    const age = localStorage.getItem("userAge");
    if (name && age) {
      setUser({ name, age: parseInt(age, 10) });
    }
  }, []);

  /* ---------- Закрытие меню ---------- */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img
          src={Logo}
          alt="Curio"
          className={styles.logo}
          onClick={() => navigate("/games?all=true")}
        />
      </div>

      <div className={styles.center}>
        {setSearchTerm && (
          <>
            <input
              type="text"
              placeholder="Поиск игр..."
              className={styles["search-input"]}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  onSearch?.();
                }
              }}
            />
            <button
              className={styles.searchButton}
              onClick={() => onSearch?.()}
            >
              Найти
            </button>
          </>
        )}
      </div>

      <div className={styles.right} ref={menuRef}>
        <Link to="/about" className={styles.link}>
          О нас
        </Link>

        <div
          className={styles.avatar}
          onClick={() => setShowMenu(prev => !prev)}
          title={user?.name || "Пользователь"}
        >
          {user ? user.name[0].toUpperCase() : "👦"}
        </div>

        <div
          className={`${styles.userMenu} ${
            showMenu ? styles.show : ""
          }`}
        >
          {user && (
            <>
              <p>
                <strong>Имя:</strong> {user.name}
              </p>
              <p>
                <strong>Возраст:</strong> {user.age}
              </p>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;