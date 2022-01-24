import { useState ,useEffect } from "react";

const BudgetControl = ({ budget, spendings }) => {

    const [available, setAvailable] = useState(0);
    const [worn, setWorn] = useState(0);

    useEffect(() => {
        const totalWorn = spendings.reduce( (total, spending) => spending.amount + total, 0);
        const totalAvailable = budget - totalWorn;
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
          <p>grafica aca</p>

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
