import React from 'react'
import { Globalcomp } from '../globalcontext/context'
import {useContext} from 'react'

const Balance = () => {
  //pulling out the transactions
  //tabhi ye global context banaya h taaki any component can
  const { transactions }=useContext(Globalcomp)
  //here each transaction is an object with an amount,id and name
  //below we are mapping all the amounts and getting them in the amount array
  const amount=transactions.map(transaction=>transaction.amount)
  const total=(amount.length?amount.reduce(sum):0)

  function sum(sum,num)
  {
    return sum+num
  }

  return (
    <div>
        <h4>Your Balance</h4>
        <h1 >Rs{total}</h1>
    </div>
  )
}
export default Balance