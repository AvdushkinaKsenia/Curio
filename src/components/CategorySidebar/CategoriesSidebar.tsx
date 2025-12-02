import React, { useEffect, useState } from 'react';
import { Category } from '../../types/game';
import styles from './CategoriesSidebar.module.css';

interface CategoriesSidebarProps {
  onSelectCategory?: (category: string | 'allCategories' | null) => void;
  selectedCategory?: string | 'allCategories' | null;
}

const CategoriesSidebar: React.FC<CategoriesSidebarProps> = ({ onSelectCategory, selectedCategory }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('/Curio/data/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Ошибка загрузки категорий:', err));
  }, []);

  return (
    <div className={styles.sidebar}>
      {/* Кнопка "Все игры" */}
      <div
        onClick={() => onSelectCategory && onSelectCategory(null)}
        className={`${styles.categoryItem} ${selectedCategory === null ? styles.active : ''}`}
        style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}
      >
        Все игры
      </div>

      <hr style={{ border: '1px solid #ff8f40', margin: '0.5rem 0 1rem 0' }} />

      {/* Кнопка "Все категории" */}
      <div
        onClick={() => onSelectCategory && onSelectCategory('allCategories')}
        className={`${styles.categoryItem} ${selectedCategory === 'allCategories' ? styles.active : ''}`}
        style={{ marginBottom: '1rem', fontWeight: 'bold', cursor: 'pointer' }}
      >
        Все категории
      </div>

      <ul>
        {categories.map(cat => (
          <li
            key={cat.id}
            onClick={() => onSelectCategory && onSelectCategory(cat.title)}
            className={`${styles.categoryItem} ${selectedCategory === cat.title ? styles.active : ''}`}
          >
            {cat.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSidebar;