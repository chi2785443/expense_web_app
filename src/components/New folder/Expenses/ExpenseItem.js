import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // to use useState call the fuction useState() inside the component.

  const [title, setTitle] = useState(props.title);

  // creating a click handler
  const clickHandler = () => {
    setTitle("updated!!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change style</button>
    </Card>
  );
};

export default ExpenseItem;
