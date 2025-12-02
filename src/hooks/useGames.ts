import { useEffect, useState } from "react";

export interface Game {
  id: number;
  title: string;
  image: string;
  category: string;
  ageGroup: number[];
  shortDescription: string;
  longDescription: string;
  link: string;
}

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Curio/data/games.json")
      .then(res => res.json())
      .then(data => {
        setGames(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Ошибка загрузки игр:", err);
        setLoading(false);
      });
  }, []);

  return { games, loading };
};