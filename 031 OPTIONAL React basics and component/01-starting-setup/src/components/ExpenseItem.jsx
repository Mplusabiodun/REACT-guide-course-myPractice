import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

// .expense-date {
//     display: flex;
//     flex-direction: column;
//     width: 5.5rem;
//     height: 5.5rem;
//     border: 1px solid #ececec;
//     background-color: #2a2a2a;
//     color: white;
//     border-radius: 12px;
//     align-items: center;
//     justify-content: center;
//   }

//   .expense-date__month {
//     font-size: 0.75rem;
//     font-weight: bold;
//   }

//   .expense-date__year {
//     font-size: 0.75rem;
//   }

//   .expense-date__day {
//     font-size: 1.5rem;
//     font-weight: bold;
//   }
