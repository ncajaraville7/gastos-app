const BudgetControl = ({ budget }) => {

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
                    <span>Disponible:</span> {formatNumber(0)}
                </p>
                <p>
                    <span>Gastado:</span> {formatNumber(0)}
                </p>
            </div>
      </div>
  );
};

export default BudgetControl;
