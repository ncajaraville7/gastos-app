import { useState, useEffect } from 'react';

const Filters = ({ filter, setFilter}) => {
  return (
    <div className="filter shadow container">
        <form className='input'>
            <label>Filtrar Gastos</label>
            <select
              value={filter}
              onChange={ e => setFilter(e.target.value) }
            >
              <option value="">-- Seleccionar --</option>   
              <option value="Ahorro">Ahorro</option>   
              <option value="Comida">Comida</option>   
              <option value="Casa">Casa</option>   
              <option value="Ocio">Ocio</option>   
              <option value="Salud">Salud</option>   
              <option value="Tarjetas">Tarjetas</option>   
              <option value="Suscripciones">Suscripciones</option>
            </select>
        </form>
    </div>
  );
};

export default Filters;
