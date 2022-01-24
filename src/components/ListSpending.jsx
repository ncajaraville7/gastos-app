import Spending from "./Spending";

const ListSpending = ({ spendings }) => {
  return (
      <div className="">
          <h2>{spendings.length ? 'gastos' : 'no hay gastos'}</h2>

          {spendings.map( spending => (
            <Spending
                key={spending.id}
                spending={spending}
            />
          ))}
      </div>
  );
};

export default ListSpending;
