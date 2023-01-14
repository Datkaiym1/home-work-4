import { useState } from "react";
import FormInput from "../UI/FormInput/FormInput";
import "./ExpenseForm.css";
import Button from "../UI/Button/Button";


export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(null);

  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
    
  };

  const priceInputChangeHandler = (event) => {
    const value = event.target.value
    if (value.charAt(0) !== "-") {
      setPrice(value);
    }
  };

  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
      title,
      date,
      price,
    };
    props.onNewExpenseAdd(expenseData)
  };
  return (
    <form className="expenses">
     
      <FormInput
        id="name"
        labelName="Название"
        inputType="text"
        placeholder="Введите.."
        value={title}
        onChange={titleInputChangeHandler}
      />

      <FormInput
        id="price"
        labelName="Количество денег"
        inputType="number"
        value={price}
        onChange={priceInputChangeHandler}
       
      />

      <FormInput
        id="date"
        labelName="Дата"
        inputType="date"
        placeholder="dd.mm.yyyy"
        onChange={dateInputChangeHandler}
      />

      <Button title="Отмена" onClick={cancelHandler}  />
      <Button title="Сохранить" onClick={saveHandler} />
    
      
    </form>
  );
};
