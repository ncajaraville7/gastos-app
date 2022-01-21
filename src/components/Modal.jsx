import CloseBtn from '../img/cerrar.svg';

const Modal = ({ setModal, animateModal, setAnimateModal }) => {

    const closeModal = () => {
        
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 400)
    }

  return (
      <div className="modal">
        <div className="close-modal">
            <img 
                src={CloseBtn} 
                alt="btn close"
                onClick={closeModal} />
        </div>

        <form className={`form ${animateModal ? "animate" : 'close'}`}>
            <legend>Nuevo Gasto</legend>
            <div className='input'>
                <label htmlFor="name">Nombre del gasto</label>
                <input 
                    type="text"
                    placeholder='Nombre del gasto'
                />
            </div>
            <div className='input'>
                <label htmlFor="name">Monto</label>
                <input 
                    type="number"
                    placeholder='Monto del gasto'
                />
            </div>

            <div className='input'>
                <label htmlFor="name">Categoría</label>
                <select 
                    id="category">
                        <option value="">-- Seleccionar --</option>   
                        <option value="saving">Ahorro</option>   
                        <option value="meal">Comida</option>   
                        <option value="home">Casa</option>   
                        <option value="leisure">Ocio</option>   
                        <option value="healt">Salud</option>   
                    </select>
            </div>

            <input 
                type="submit"
                value="Confimar Gasto"     
            />
        </form>
      </div>
  );
};

export default Modal;
