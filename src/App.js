import ExportItem from "./components/ExportItem";
import "./styles.css";

export default function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
    <ExportItem description ={expenses[0].title} price = {expenses[0].amount} date = {expenses[0].date}></ExportItem>
    <ExportItem description ={expenses[1].title} price = {expenses[1].amount} date = {expenses[0].date}></ExportItem>
    <ExportItem description ={expenses[2].title} price = {expenses[2].amount} date = {expenses[0].date}></ExportItem>
    <ExportItem description ={expenses[3].title} price = {expenses[3].amount} date = {expenses[0].date}></ExportItem>
    </div>
  );
}
