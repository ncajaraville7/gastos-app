import { useState ,useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({ budget, spendings }) => {

    const [percentage, setPercentage] = useState(0);

    const [available, setAvailable] = useState(0);
    const [worn, setWorn] = useState(0);

    useEffect(() => {
        const totalWorn = spendings.reduce( (total, spending) => spending.amount + total, 0);
        const totalAvailable = budget - totalWorn;

        //percentage worn

        const newPercentage = (( (budget - totalAvailable) / budget ) * 100).toFixed(2)

        setPercentage(newPercentage);
        setAvailable(totalAvailable);
        setWorn(totalWorn);
    }, [spendings])

    const formatNumber = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
      <div className="container-budget container shadow two-colum">
          <CircularProgressbar
            styles={buildStyles({
                pathColor: '#3B82F6',
                trailColor: '#F5F5F5'
            })}
            value={percentage}
            text={`${percentage}% Gastado`}
          />

          

            <div className="content-budget">
                <p>
                    <span>Presupuesto:</span> {formatNumber(budget)}
                </p>
                <p>
                    <span>Disponible:</span> {formatNumber(available)}
                </p>
                <p>
                    <span>Gastado:</span> {formatNumber(worn)}
                </p>
            </div>
      </div>
  );
};

export default BudgetControl;
