import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import { Category } from '../types/game';

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/Curio/data/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Ошибка загрузки категорий:', err));
  }, []);

  const handleCategoryClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="page">
      <Header />
      <main className="categoriesContainer">
        <h1>Категории</h1>
        <div className="categoriesGrid">
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category.link)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoriesPage;