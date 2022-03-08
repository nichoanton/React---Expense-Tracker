import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddExpense = (props) => {
    
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const expensenameChangeHandler = (event) => {
    setName(event.target.value)
  };

  const costChangeHandler = (event) => {
    setCost(event.target.value)
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
        expenseName: name,
        cost: cost
    }

    props.onSaveExpenseData(expenseData);     //data from child to parent component
    setName('');
    setCost('');
  };

  return (
      <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-sm m-2">
              <label for="name" className="mx-2"><em>Expense Name:</em></label>
              <input
                type="text"
                value={name}
                onChange={expensenameChangeHandler}
              ></input>
            </div>
            <div className="col-sm m-2">
              <label for="cost" className="mx-2"><em>Cost:</em></label>
              <input
                type="text"
                value={cost}
                onChange={costChangeHandler}
              ></input>
            </div>
            <div className="col-sm m-2">
              <button className="btn btn-primary" type="submit">
                Add Expense
              </button>
            </div>
          </div>
      </form>
  );
};

export default AddExpense;
