import {React,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'
export const IncomeAndExpenses = () => {
    //Get transactions array from GlobalState
    const {transactions} = useContext(GlobalContext)
    var income=0;
    var expense=0;

    //For each item in transaction, if value is positive we add to income, negative expense
    transactions.map((element)=>{
        if(element.amount>0){
            income+=element.amount;
        }else{
            expense+=element.amount;
        }
    })

    //Make income and expense be 2 digits sig figs
    income = income.toFixed(2);
    expense =   expense.toFixed(2);
    return (
        //returning a div containing formatted income and expense
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p  className="money plus">+${numberWithCommas(income)}</p>
            </div>
             <div>
                <h4>Expense</h4>
                <p className="money minus">-${numberWithCommas(Math.abs(expense))}</p>
            </div>

            
        </div>
    )
}
