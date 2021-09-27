import {React,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'
export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const {text,amount,_id} = transaction
    const sign = amount>0?'+':'-'
    
    return (
          <li className={amount>0?'plus':'minus'}>
                    {text}<span>{sign}${numberWithCommas(Math.abs(amount))}</span><button className="delete-btn" onClick={()=>deleteTransaction(_id)}>x</button>
                </li>
    )
}
