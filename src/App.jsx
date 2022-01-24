import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import ListSpending from './components/ListSpending';
import { generateID } from './helpers/generateID';
import iconAddSpending from './img/nuevo-gasto.svg';

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [spendings, setSpendings] = useState([]);

  const handleNewSpending = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 200)
  }

  const saveSpending = spending => {
      spending.id = generateID();
      spending.date = Date.now();
      setSpendings([...spendings, spending])

      setAnimateModal(false);
      setTimeout( () => {
        setModal(false)
      }, 200)
  }

  return (
    <div className={modal ? 'pin-up' : ''}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        spendings={spendings}
      />

      {isValidBudget && (
        <>
          <main>
            <ListSpending
              spendings={spendings}
            />
          </main>

          <div className='new-spending'>
            <img 
              src={iconAddSpending} 
              alt="icon add spending"
              onClick={handleNewSpending} />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveSpending={saveSpending}
        />
      )}
      
    </div>
  )
}

export default App
