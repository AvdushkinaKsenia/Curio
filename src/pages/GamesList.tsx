import { Game } from '../types/game';

interface GamesListProps {
  games: Game[];
  categoryTitle?: string;
}

export const GamesList = ({ games, categoryTitle }: GamesListProps) => {
  return (
    <div className="games-page">
      <h1>{categoryTitle ? `Игры: ${categoryTitle}` : 'Все игры'}</h1>
      
      <div className="games-grid">
        {games.map(game => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.title} className="game-image" />
            <div className="game-info">
              <h2>{game.title}</h2>
              <p>{game.description}</p>
              <div className="game-meta">
                <span>Возраст: {game.ageGroup.join('-')} лет</span>
              </div>
              <a 
                href={game.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="play-button"
              >
                Играть
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .games-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .games-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }
        
        .game-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s;
        }
        
        .game-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .game-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        
        .game-info {
          padding: 15px;
        }
        
        .game-info h2 {
          margin: 0 0 10px;
          font-size: 1.2rem;
        }
        
        .game-info p {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }
        
        .game-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #888;
          margin-bottom: 15px;
        }
        
        .play-button {
          display: block;
          text-align: center;
          padding: 8px;
          background: #4CAF50;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          transition: background 0.2s;
        }
        
        .play-button:hover {
          background: #45a049;
        }
      `}</style>
    </div>
  );
};