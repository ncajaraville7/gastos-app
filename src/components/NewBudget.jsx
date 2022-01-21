import { useState } from "react";
import Message from "./message";

const NewBudget = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {

    const [message, setMessage] = useState("");

    const handleBudget = (e) => {
        e.preventDefault();

        if( !budget || budget < 0 ) {
            setMessage('Por favor, inserte un presupuesto válido');
        } else {
            setMessage("");
            setIsValidBudget(true);
        }

    }

    return (
        <div className="container-budget container shadow">
            <form 
                className="form"
                onSubmit={handleBudget}
            >
                <div className="input">
                    <label>Definir Presupuesto</label>
                    <input 
                        type="number"
                        className="new-budget"
                        placeholder="Añade tu presupuesto"
                        value={budget}
                        onChange={ e => setBudget(Number(e.target.value)) }
                    />
                </div>

                <input 
                    type="submit"
                    value="Agregar Presupuesto" />

                    { message && <Message type="error">{message}</Message>}
            </form>
        </div>
    )
}

export default NewBudget;