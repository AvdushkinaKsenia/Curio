import React from 'react';
import styles from './Registration.module.css';

interface NameStepProps {
  name: string;
  setName: (name: string) => void;
  onNext: () => void;
}

const NameStep: React.FC<NameStepProps> = ({ name, setName, onNext }) => {
  return (
    <div className={styles.registrationContainer}>
      <div className={styles.characterSection}>
        <img src="/images/CurioWave.png" alt="Кьюрио" className={styles.characterImage} />
      </div>
      <div className={styles.formSection}>
        <h1>Привет! Я Кьюрио.</h1>
        <p>А как тебя зовут?</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Имя ребенка"
          className={styles.nameInput}
        />
        <button 
          onClick={onNext} 
          className={styles.nextButton}
          disabled={!name.trim()}
        >
          Далее →
        </button>
      </div>
    </div>
  );
};

export default NameStep;