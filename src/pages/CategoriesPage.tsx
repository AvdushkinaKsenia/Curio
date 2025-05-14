import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import { categories } from '../data/games';

const CategoriesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/games?category=${category}`); // Переход на страницу с играми по выбранной категории
  };

  return (
    <div className="page">
      <Header />
      <main className="categoriesContainer">
        <h1>Категории</h1>
        <div className="categoriesGrid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category.title)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoriesPage;
