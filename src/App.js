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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
