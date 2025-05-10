import React from 'react';
import styles from './Registration.module.css';
import CurioWave from '../../assets/CurioWave.svg';

interface NameStepProps {
  name: string;
  setName: (name: string) => void;
  onNext: () => void;
}

const NameStep: React.FC<NameStepProps> = ({ name, setName, onNext }) => {
  return (
    <div className={styles.registrationContainer}>
      <div className={`${styles.characterSection} ${styles.characterSectionName}`}>
        <img src={CurioWave} alt="Кьюрио" className={styles.characterImage} />
      </div>
      <div className={styles.formSection}>
        <h1 className={styles.title}>Привет! Я <span className={styles.curioText}>Кьюрио</span>.</h1>
        <p className={styles.subtitle}>А как тебя зовут?</p>
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