import {React,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const {text,amount,id} = transaction
    const sign = amount>0?'+':'-'
    
    return (
          <li className={amount>0?'plus':'minus'}>
                    {text}<span>{sign}${Math.abs(amount)}</span><button className="delete-btn" onClick={()=>deleteTransaction(id)}>x</button>
                </li>
    )
}
