import { GamesList } from '../../pages/GamesList';
import { useGames } from '../../hooks/useGames';

export default function CreationPage() {
  const { games, loading } = useGames();

  if (loading) return <div>Загрузка игр...</div>;

  const creationGames = games.filter(game => game.category === 'Творчество');
  
  return <GamesList games={creationGames} categoryTitle="Творчество" />;
}