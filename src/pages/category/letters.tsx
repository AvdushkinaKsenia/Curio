import { GamesList } from '../../pages/GamesList';
import { useGames } from '../../hooks/useGames';

export default function LettersPage() {
  const { games, loading } = useGames();

  if (loading) return <div>Загрузка игр...</div>;

  const lettersGames = games.filter(game => game.category === 'Буквы');

  return <GamesList games={lettersGames} categoryTitle="Буквы" />;
}