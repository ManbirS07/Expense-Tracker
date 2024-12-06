import React from 'react'
import {useContext} from 'react'
import {Globalcomp} from '../globalcontext/context'
import {Transaction} from './Transaction'
import axios from 'axios'

const Transactionlist = () => {
  const context=useContext(Globalcomp)
  console.log(context)

  //accessing the transactions
  const obj=context.transactions


  return (
    <div>
        <h3>History</h3>
      <ul id="list" className="list">
        {obj.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}></Transaction>))}
      </ul>
    </div>
  )
}
export default Transactionlist