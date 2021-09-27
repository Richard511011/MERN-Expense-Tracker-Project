import {React,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export const IncomeAndExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    var income=0;
    var expense=0;
    transactions.map((element)=>{
        if(element.amount>0){
            income+=element.amount;
        }else{
            expense+=element.amount;
        }
    })
    income.toFixed(2);
    expense.toFixed(2);
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p  className="money plus">+${income}</p>
            </div>
             <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expense)}</p>
            </div>

            
        </div>
    )
}
