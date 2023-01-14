import './ExpenseItem.css';

export const ExpenseItem =(props) =>{
    const {date, title,price} = props
    return(
        <div className='expense-item-container'>
        <div className='expense-item'>
            <p className='date'>{date.toLocaleString()}</p>
            <p className='title'> {title}</p>
            <p className='price'>{price}</p>
        </div>
        </div>
      
    );
}; 