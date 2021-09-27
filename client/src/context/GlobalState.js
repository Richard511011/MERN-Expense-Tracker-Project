import react, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios';
//initial state
const initialState = {
    transactions:[],
    error:null,
    loading:true

}
//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children})=>{

    //actions
    async function getTransactions(){
        try{
            //No need to put localhost:5000 because we added proxy
            const res = await axios.get('/api/v1/transactions');

             console.log(res)
            dispatch({
                 //do res.data to get the ENTIRE object. our array is .data so we need another .dta
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
           
          
        }catch(err){

            dispatch({
                 //do res.data to get data, our array is .data so we need another .dta
                type: 'TRANSACTION_ERROR',
                //note we have a data entry called error in our json response
                payload:  err.response.data.error
            })
        }
    }
    const [state,dispatch] = useReducer(AppReducer,initialState);
    async function deleteTransaction(id){
        try{
          await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
        }catch(err){
             dispatch({
                 //do res.data to get data, our array is .data so we need another .dta
                type: 'TRANSACTION_ERROR',
                //note we have a data entry called error in our json response
                payload:  err.response.data.error
            })
        }
      
    }
      async function addTransaction(transaction){
          const config = {
              headers: {
                  'Content-Type' :'application/json'
                }
          }
        try{
            const res = await axios.post('api/v1/transactions',transaction,config);
           dispatch({
            type:'ADD_TRANSACTION',
            payload:res.data.data
        });
        }  catch(err){
            dispatch({
                 //do res.data to get data, our array is .data so we need another .dta
                type: 'TRANSACTION_ERROR',
                //note we have a data entry called error in our json response
                payload:  err.response.data.error
            })
        }

       
    }
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        error:state.error,
        loading:state.loading, 
        deleteTransaction,
        addTransaction,
        getTransactions}}>
        {children}
    </GlobalContext.Provider>)

}