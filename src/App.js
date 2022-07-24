
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: new Date(2021, 2, 28),
      title: "car insurance",
      amount: "69",
    },
    {
      date: new Date(2021, 3, 29),
      title: "food",
      amount: "300",
    },
  ];
  let itemDisplay = expenses.map((num) => (
    <ExpenseItem date={num.date} title={num.title} amount={num.amount} />
  ));

  return (
    <div>
      <h2>Let's get started!</h2>
      <div className="expenses">{itemDisplay}</div>
    </div>
  );
}

export default App;
