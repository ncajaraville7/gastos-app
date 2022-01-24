import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget, spendings }) => {
    return (
        <header>
            <h1>APP GASTOS</h1>

            {isValidBudget ?(
                <BudgetControl 
                    budget={budget}
                    spendings={spendings}
                />
            ) :(
                <NewBudget 
                    budget={budget}
                    setBudget={setBudget}
                    isValidBudget={isValidBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )}
            
        </header>
    )
}

export default Header;
