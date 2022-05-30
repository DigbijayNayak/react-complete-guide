import logo from "./logo.svg";
import "./App.css";
import Expenses from './components/Expenses/Expenses'
function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Bike Insurance", amount: 94.67, date: new Date(2021, 3, 28) },
    { title: "Tractor Insurance", amount: 384.67, date: new Date(2021, 4, 28) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
