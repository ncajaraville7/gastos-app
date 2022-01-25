import Spending from "./Spending";

const ListSpending = ({ spendings, setSpendingEdit, deleteSpending }) => {
  return (
      <div>
          <h2 className="container text-aling">{spendings.length ? 'GASTOS' : 'NO HAY GASTOS'}</h2>

          {spendings.map( spending => (
            <Spending
                key={spending.id}
                spending={spending}
                setSpendingEdit={setSpendingEdit}
                deleteSpending={deleteSpending}
            />
          ))}
      </div>
  );
};

export default ListSpending;
