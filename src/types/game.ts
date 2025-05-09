export interface Game {
  id: number;
  title: string;
  image: string;
  category: string;
  ageGroup: number[];
  description: string;
  link: string;
}

export interface Category {
  id: number;
  title: string;
  image: string;
  link: string;
}

export interface UserData {
  name: string;
  age: number | null;
}