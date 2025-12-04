import React from 'react';
import { Category } from '../../types/game';
import styles from './CategoriesSidebar.module.css';

interface CategoriesSidebarProps {
  categories: Category[];
  onSelectCategory?: (category: string | 'allCategories' | null) => void;
  selectedCategory?: string | 'allCategories' | null;
}

const CategoriesSidebar: React.FC<CategoriesSidebarProps> = ({
  categories,
  onSelectCategory,
  selectedCategory
}) => {
  return (
    <div className={styles.sidebar}>
      {/* Кнопка "Все игры" */}
      <div
        onClick={() => onSelectCategory && onSelectCategory(null)}
        className={`${styles.categoryItem} ${selectedCategory === null ? styles.active : ''}`}
        style={{ fontWeight: 'bold', marginBottom: '0.5rem', cursor: 'pointer' }}
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
            style={{ cursor: 'pointer' }}
          >
            {cat.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSidebar;