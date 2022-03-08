import ExpenseItem from "./ExpenseItem";
import { Card } from "react-bootstrap";

const ExpenseList = () => {
  const expenses = [
    { name: "Shopping", cost: 100 },
    { name: "Food", cost: 100 },
    { name: "Bill", cost: 100 },
  ];

  return (
      <Card className="text-center">
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem name={expense.name} cost={expense.cost} />
      ))}
    </ul>
    </Card>
  );
};

export default ExpenseList;
