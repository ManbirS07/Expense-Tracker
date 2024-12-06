const Reducer=(state,action)=>
{
    switch(action.type)
    {
        //delete wale case me ... se I access the original state and then uske baad I pass what I want to change in the state
        case 'Delete':
            return(
                {
                    ...state,
                    transactions:state.transactions.filter
                    (transaction=>transaction.id!=action.payload)
                }
            )
        case 'Add':
            // we have to return the original transactions as well as new in the new state so
            return(
                {
                    ...state,
                    transactions: [action.payload,...state.transactions]
                }
            )
        default:
            return state
    }
}

export default Reducer