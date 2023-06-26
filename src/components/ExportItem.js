import "./ExportItem.css";

export default function ExportItem(data) {
  const date ="2/10/2023";
 // const description = " Description";
 // const price = "Price";

  return (
    <div className = "expense-item">
      <h2>{data.date.toDateString()} </h2>
      <h2 className = "expense-item__description">{data.description}</h2>
      <h2 className = "expense-item__price">{data.price}</h2>
    </div>
  );
}
