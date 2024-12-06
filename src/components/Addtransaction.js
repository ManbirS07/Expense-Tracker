import React from 'react'
import { useState,useContext} from 'react'
import { Globalcomp } from '../globalcontext/context'


const Addtransaction = () => {

  const [text,settext]=useState('')
  const [amount,setamount]=useState(0)
  const { addtransaction }=useContext(Globalcomp)

  const gettextvalue=(e)=>
  {
    settext(e.target.value)
    console.log(text)
  }

  const getamountvalue=(e)=>
  {
      setamount(e.target.value)
      console.log(amount)
  }

  const onsubmit = (e)=>
  {
    e.preventDefault()

    //passing values of text and amount from states above
    const newtransaction={
      id:Math.floor(Math.random()*100),
      text:text,
      amount:+amount //amount was getting passed as string adding + converts it to a number
    }
    addtransaction(newtransaction)
    console.log(newtransaction.id)
  }
  //achaaaa onclick ki jagah jab form submit karre h tab hi naya state return ho rha h

 //onSubmit to get values of transaction
  return (
    <div>
        <h3>Add new transaction</h3>
      <form id="form" onSubmit={onsubmit}>

        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." onChange={gettextvalue}/>
        </div>

        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." onChange={getamountvalue}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default Addtransaction
