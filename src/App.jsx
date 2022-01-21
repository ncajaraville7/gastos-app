import { useState } from 'react';
import Header from './components/Header';
import iconAddSpending from './img/nuevo-gasto.svg';
import Modal from './components/Modal';

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewSpending = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 200)
  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <div className='new-spending'>
          <img 
            src={iconAddSpending} 
            alt="icon add spending"
            onClick={handleNewSpending} />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
        />
      )}
      
    </div>
  )
}

export default App
