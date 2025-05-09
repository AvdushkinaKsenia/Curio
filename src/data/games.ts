import { Game, Category } from '../types/game';

export const games: Game[] = [
  {
    id: 1,
    title: "Приключение крысок: Путь к дружбе",
    image: "/images/game1.png",
    category: "Развивающие",
    ageGroup: [4, 5, 6, 7],
    description: "Увлекательное приключение о дружбе",
    link: "/game/1"
  },
  {
    id: 2,
    title: "Реши пример",
    image: "/images/game2.png",
    category: "Математика",
    ageGroup: [5, 6, 7],
    description: "Простые математические примеры",
    link: "/game/2"
  }
];

export const categories: Category[] = [
  {
    id: 1,
    title: "Фигуры",
    image: "/images/category1.png",
    link: "/category/figures"
  },
  {
    id: 2,
    title: "Буквы",
    image: "/images/category2.png",
    link: "/category/letters"
  }
];