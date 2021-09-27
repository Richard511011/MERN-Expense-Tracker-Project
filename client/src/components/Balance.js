import {React,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'
// import { IncomeAndExpenses } from './IncomeAndExpenses';
export const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    var sum = 0;
    var colorValue;
    //summing up all the money
    transactions.map((element)=>{
        sum= sum+ element.amount;
    })
    //fixing value to 2 decimal points
    sum = sum.toFixed(2)
    if(sum>0){
        colorValue='green';
    }else if(sum<0){
        colorValue='red'
    }else{
        colorValue='black'
    }
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id='balance'style={{color: colorValue}}>{sum<0?'-':''}${numberWithCommas(Math.abs(sum))}</h1>
        </>
    )
}
