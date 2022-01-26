import { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Filters from './components/Filters';
import ListSpending from './components/ListSpending';
import { generateID } from './helpers/generateID';
import iconAddSpending from './img/nuevo-gasto.svg';
import Spending from './components/Spending';

function App() {

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) || 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [spendings, setSpendings] = useState(
    localStorage.getItem('spendings') ? JSON.parse(localStorage.getItem('spendings')) : []
  );

  const [spendingEdit, setSpendingEdit] = useState({});

  const [filter, setFilter] = useState("");
  const [filteredSpending, setFilteredSpending] = useState([]);

  useEffect( ()=> {
    //We check that the expense has something to edit it
    if(Object.keys(spendingEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 200)
    }
  }, [spendingEdit])

  useEffect( () => {
    if(filter) {
      const spendingFilter = spendings.filter( spending => spending.category === filter)
      setFilteredSpending(spendingFilter);
    }
  }, [filter])

  useEffect( ()=> {
    localStorage.setItem('budget', budget || 0)
  }, [budget])

  useEffect( () => {
    localStorage.setItem('spendings', JSON.stringify(spendings) || [])
  }, [spendings])

  useEffect( ()=> {
    const budgetLocalStorage = Number(localStorage.getItem('budget')) || 0;

    if(budgetLocalStorage > 0) {
      setIsValidBudget(true)
    }
  }, [])

  const handleNewSpending = () => {
    setModal(true);
    setSpendingEdit({});

    setTimeout(() => {
      setAnimateModal(true);
    }, 200)
  }

  const deleteSpending = id => {
    const spendingsUpdate = spendings.filter( spending => spending.id !== id)
    setSpendings(spendingsUpdate);
  }

  const saveSpending = spending => {

    if(spending.id) {
      const spendingUpdate = spendings.map( spendingState => spendingState.id === spending.id ? spending : spendingState)
      setSpendings(spendingUpdate);
      setSpendingEdit({});
    } else {
      spending.id = generateID();
      spending.date = Date.now();
      setSpendings([...spendings, spending])
    }
      
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
        setSpendings={setSpendings}
      />

      {isValidBudget && (
        <>
          <main>
            <Filters
              filter={filter}
              setFilter={setFilter}
            />
            <ListSpending
              spendings={spendings}
              setSpendingEdit={setSpendingEdit}
              deleteSpending={deleteSpending}
              filter={filter}
              filteredSpending={filteredSpending}

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
          spendingEdit={spendingEdit}
          setSpendingEdit={setSpendingEdit}
        />
      )}
      
    </div>
  )
}

export default App
