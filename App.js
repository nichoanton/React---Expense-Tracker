import { useState } from "react";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseList from "./components/ExpenseList";
import NewExpense from "./components/NewExpense";

function App() {
  // const [expenses, setExpenses] = useState("");

  const addExpenseHandler = (expense) => {
    console.log(expense);

    // setExpenses((previousExpenses) => {
    //   return [expense, ...previousExpenses]
    // });
  };

  return (
    <Container className="my-3 text-center">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList/>
    </Container>
  );
}

export default App;
