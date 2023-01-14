import { ExpenseItem } from "../expense-item/ExpenseItem"
export const Expenses = ({expenses}) =>{
    return (
        <ul>
        {expenses.map((elem) =>{
            return(
                
                 <ExpenseItem date={elem.date} title={elem.title} price={elem.price}/>
                 
                  ) })}
    </ul>
    )
}