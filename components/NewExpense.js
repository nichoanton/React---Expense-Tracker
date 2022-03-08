import AddExpense from "./AddExpense";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,          //expense data would be produced from NewExpense
            id: Math.random().toString()   
        };
        props.onAddExpense(expenseData);   //data is now passed to App.js, child to parent component
    };

    return (
        <div>
            <AddExpense onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;

