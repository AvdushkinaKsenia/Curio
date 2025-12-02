import { GamesList } from '../../pages/GamesList';
import { useGames } from '../../hooks/useGames';

export default function FiguresPage() {
  const { games, loading } = useGames();

  if (loading) return <div>Загрузка игр...</div>;

  const figuresGames = games.filter(game => game.category === 'Фигуры');

  return <GamesList games={figuresGames} categoryTitle="Фигуры" />;
}