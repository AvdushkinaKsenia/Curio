import { useState } from "react";
import { Game } from "../types/game";

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);

  const searchGames = async (query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8000/search?query=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setGames(data);
    } catch (e) {
      console.error("Ошибка поиска:", e);
    } finally {
      setLoading(false);
    }
  };

  return { games, loading, searchGames };
};