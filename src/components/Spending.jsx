import { dateFormating } from '../helpers/dateFormating';

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

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

const Spending = ({spending, setSpendingEdit, deleteSpending}) => {
    const { category, name, amount, id, date} = spending;

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={() => setSpendingEdit(spending)}>
            Editar
          </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={ () => deleteSpending(id)}
          >
             Borrar
          </SwipeAction>
        </TrailingActions>
      );

  return (
        <SwipeableList>
            <SwipeableListItem
                className="container"
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
                >
                <div className="spending shadow">
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
            </SwipeableListItem>
        </SwipeableList>
  );
};

export default Spending;
