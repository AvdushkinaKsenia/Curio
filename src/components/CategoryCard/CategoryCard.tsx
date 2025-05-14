import React from 'react';
import { Category } from '../../types/game';
import styles from './CategoryCard.module.css';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={category.image} alt={category.title} className={styles.image} />
      <h3 className={styles.title}>{category.title}</h3>
    </div>
  );
};

export default CategoryCard;
