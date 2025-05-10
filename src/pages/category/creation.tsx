import { GamesList } from '../../pages/GamesList';
import { games } from '../../data/games';

export default function CreationPage() {
  const creationGames = games.filter(game => game.category === 'Творчество');
  
  return (
    <GamesList games={creationGames} categoryTitle="Творчество" />
  );
}