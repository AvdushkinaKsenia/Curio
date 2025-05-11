import React from 'react';
import Header from '../components/Header/Header';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import { categories } from '../data/games';

const CategoriesPage: React.FC = () => {
  const handleCategoryClick = (link: string) => {
    // Открываем категорию в новой вкладке
    window.open(link, '_blank');
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
              onClick={() => handleCategoryClick(category.link)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoriesPage;