import { dateFormating } from '../helpers/dateFormating';

import IconSaving from '../img/icono_ahorro.svg';
import IconHome from '../img/icono_casa.svg';
import IconMeal from '../img/icono_comida.svg';
import IconCards from '../img/icono_gastos.svg';
import IconLeisure from '../img/icono_ocio.svg';
import IconHealt from '../img/icono_salud.svg';
import IconSubscriptions from '../img/icono_suscripciones.svg';

const icons = {
    Ahorro: IconSaving,
    Comida: IconMeal,
    Casa: IconHome,
    Ocio: IconLeisure,
    Salud: IconHealt,
    Tarjetas: IconCards,
    Suscripciones: IconSubscriptions
}

const Spending = ({spending}) => {
    const { category, name, amount, id, date} = spending;
  return (
      <div className="spending shadow container">
          <div className="content-spending">
              
              <img src={icons[category]} alt="icon"/>

              <div className="description-spending">
                  <p className="category">
                      {category}
                  </p>
                  <p className="name-spending">
                      {name}
                  </p>
                  <p className='date-spending'>
                      Agregado el: <span> {dateFormating(date)} </span>
                  </p>
              </div>
          </div>
          
            <p className='amount-spending'>
                $ {amount}
            </p>
      </div>
  );
};

export default Spending;
