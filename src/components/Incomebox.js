import React from 'react'
import { Globalcomp } from '../globalcontext/context'
import {useContext} from 'react'

const Incomebox = () => {
  const { transactions }=useContext(Globalcomp)

  const amounts=transactions.map(transaction=>transaction.amount)
  

  const income=amounts.filter(item=>item>0)
  const postotal=(income.length?income.reduce(sum):0)

  const spending=amounts.filter(item=>item<0)
  const negtotal=(spending.length?spending.reduce(sum):0)
  const neg=Math.abs(negtotal)

  function sum(sum,num)
  {
    return sum+num
  }

  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" className="money plus">Rs{postotal}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" className="money minus">-Rs{neg}</p>
    </div>
  </div>
  )
}

export default Incomebox
