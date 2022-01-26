import Spending from "./Spending";

const ListSpending = ({ spendings, setSpendingEdit, deleteSpending, filter, filteredSpending }) => {
  return (
      <div>
          <h2 className="container text-aling list-spendings">{spendings.length ? 'GASTOS' : 'NO HAY GASTOS'}</h2>

          {
            filter ? (
              <>
                <p className="container text-aling list-spendings">{filteredSpending.length ? '' : 'NO SE ENCONTRARON GASTOS'}</p>
                {filteredSpending.map( spending => (
                  <Spending
                      key={spending.id}
                      spending={spending}
                      setSpendingEdit={setSpendingEdit}
                      deleteSpending={deleteSpending}
                  />
                ))}
              </>
            ) : (
              spendings.map( spending => (
                <Spending
                    key={spending.id}
                    spending={spending}
                    setSpendingEdit={setSpendingEdit}
                    deleteSpending={deleteSpending}
                />
              ))
            )
          }
      </div>
  );
};

export default ListSpending;
