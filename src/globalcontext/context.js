import React,{createContext,useReducer} from 'react'
import Reducer from './reducer'

const initialstate={
    transactions:[
    ]
}

//creating globalcontext
export const Globalcomp = createContext(initialstate)

//provider component
//we need to create an action to delete from transaction list
//and also to add to the list
//we can send whatever we want to in the payload
export const Globalprovider= ({children}) =>
{
    const [state,dispatch]=useReducer(Reducer,initialstate)

    function deletetransaction(id)
    {
        dispatch({
            type:'Delete',
            payload:id
        })
    }

    function addtransaction(transaction)
    {
        dispatch({
            type:'Add',
            payload:transaction
        })
    }

    return(
        <Globalcomp.Provider value={{transactions:state.transactions,deletetransaction,addtransaction}}>
            {children}
        </Globalcomp.Provider>
    )
}

//provider provides state and action to any components it is wrapped around