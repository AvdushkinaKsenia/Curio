import React, { useState } from 'react';
import Header from '../components/Header/Header';
import NameStep from '../components/Registration/NameStep';
import AgeStep from '../components/Registration/AgeStep';
import LoadingStep from '../components/Registration/LoadingStep';
import GameSelectionModal from '../components/GameSelectionModal/GameSelectionModal';

const HomePage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [user, setUser] = useState({
    name: '',
    age: null as number | null
  });
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);
  const handleModalClose = () => setShowModal(false);

  return (
    <div className="page">
      {step > 3 && <Header />}
      
      {step === 1 && (
        <NameStep
          name={user.name}
          setName={(name) => setUser({...user, name})}
          onNext={handleNext}
        />
      )}
      
      {step === 2 && (
        <AgeStep
          age={user.age}
          setAge={(age) => setUser({...user, age})}
          onNext={handleNext}
          name={user.name}
        />
      )}
      
      {step === 3 && <LoadingStep onComplete={() => {
        handleNext();
        setShowModal(true);
      }} />}
      
      {showModal && (
        <GameSelectionModal onClose={handleModalClose} />
      )}
    </div>
  );
};

export default HomePage;