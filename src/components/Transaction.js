//to get konsa transaction h
import React from 'react'
import {useContext} from 'react'
import { Globalcomp } from '../globalcontext/context'

//Transaction me id pass ho rhi h in transactionlist
 export const Transaction=(props)=>
 {
const { deletetransaction } = useContext(Globalcomp)
    const sign=props.transaction.amount<0?'-':'+'
    return(
        <li className={props.transaction.amount<0?"minus":"plus"}>
          {props.transaction.text}<span>{sign}Rs{Math.abs(props.transaction.amount)}</span>

          <button className="delete-btn" onClick={()=>deletetransaction(props.transaction.id)}>x</button>
        </li>
    )
 }