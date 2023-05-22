import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState(2023);
  const changeSelectedYear = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredYear = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter selected={year} onChangeYear={changeSelectedYear} />
        <ExpenseList items={filteredYear}/>
      </div>
    </div>
  );
}

export default Expenses;
