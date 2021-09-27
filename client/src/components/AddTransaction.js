import {React, useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);


    const onSubmit =(e)=>{
        e.preventDefault();
        //Check for non-zero amount
        if(amount==0){
            alert('please input non-zero amount');
            setText('');
            setAmount('');
        }else{

        
        setText('');
        setAmount('');
        // NOTE: ID is using a rng to generate, it is possible for duplicate ID's to exist, just very unlikely
        const newTransaction = {
            // id:Math.floor(Math.random()*10000000000),
            text,
            amount:+amount,
        }
        addTransaction(newTransaction)
    }
    }
    
    return (
        <>
            <h3>Add new Transaction</h3>
            <form >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='enter text...'/>
                </div>
                  <div className="form-control">
                    <label htmlFor="amount">Amount
                    <br/>
                    (negative-expense, positive-income)
                    </label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='enter amount...'/>
                </div>
                <button className='btn' onClick={(e)=>onSubmit(e)}>Add transaction</button>
            </form>
        </>
    )
}
