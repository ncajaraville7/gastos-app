import { useState, useEffect } from 'react';
import CloseBtn from '../img/cerrar.svg';
import Message from './message';


const Modal = ({ 
    setModal, 
    animateModal, 
    setAnimateModal, 
    saveSpending, 
    spendingEdit,
    setSpendingEdit 
}) => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [id, setId] = useState("");

    const [message, setMessage] = useState("");

    

    useEffect( ()=> {
        if(Object.keys(spendingEdit).length > 0) {
            setName(spendingEdit.name);
            setAmount(spendingEdit.amount);
            setCategory(spendingEdit.category);
            setId(spendingEdit.id);
            setDate(spendingEdit.date);
          }
    }, [])

    const closeModal = () => {
        
        setAnimateModal(false);
        setSpendingEdit({});

        setTimeout(() => {
            setModal(false);
        }, 400)
    }

    const handleSpending = e => {
        e.preventDefault();

        if(!name || !amount || !category) {
            
            setMessage('Debes completar todos los campos')
            setTimeout( ()=> {
                setMessage('');
            }, 2500)

        } else if (amount < 0) {
            setMessage('Monto invalido')

            setTimeout( ()=> {
                setMessage('');
            }, 2500)
        } else {
            saveSpending({name, amount, category, id, date});   
        }
    }

  return (
      <div className="modal">
        <div className="close-modal">
            <img 
                src={CloseBtn} 
                alt="btn close"
                onClick={closeModal} />
        </div>

        <form 
            className={`form ${animateModal ? "animate" : 'close'}`}
            onSubmit={handleSpending}>
            <legend>{spendingEdit.name ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
            <div className='input'>
                <label htmlFor="name">Nombre del gasto</label>
                <input
                    id='name'
                    type="text"
                    placeholder='Nombre del gasto'
                    value={name}
                    onChange={ e => setName(e.target.value)}
                />
            </div>
            <div className='input'>
                <label htmlFor="amount">Monto</label>
                <input
                    id='amount' 
                    type="number"
                    placeholder='Monto del gasto'
                    value={amount}
                    onChange={ e => setAmount(Number(e.target.value))}
                />
            </div>

            <div className='input'>
                <label htmlFor="category">Categoría</label>
                <select 
                    id="category"
                    value={category}
                    onChange={ e => setCategory(e.target.value)}>
                        <option value="">-- Seleccionar --</option>   
                        <option value="Ahorro">Ahorro</option>   
                        <option value="Comida">Comida</option>   
                        <option value="Casa">Casa</option>   
                        <option value="Ocio">Ocio</option>   
                        <option value="Salud">Salud</option>   
                        <option value="Tarjetas">Tarjetas</option>   
                        <option value="Suscripciones">Suscripciones</option>   
                    </select>
            </div>

            <input 
                type="submit"
                value={spendingEdit.name ? 'Confirmar cambios' : 'Agregar Gasto'}     
            />
        </form>

        { message && <Message type="error">{message}</Message>}
      </div>
  );
};

export default Modal;
