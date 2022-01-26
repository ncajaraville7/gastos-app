import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget, spendings, setSpendings }) => {
    return (
        <header>
            <h1>APP GASTOS</h1>

            {isValidBudget ?(
                <BudgetControl 
                    budget={budget}
                    setBudget={setBudget}
                    spendings={spendings}
                    setSpendings={setSpendings}
                    setIsValidBudget={setIsValidBudget}
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
