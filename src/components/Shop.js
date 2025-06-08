import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'

const Shop = () => {
    const dispatch = useDispatch()
    const {withdrawMoney, depositMoney} =bindActionCreators(actionCreators,dispatch)
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
      <button onClick={()=>{withdrawMoney(100)}} className='btn btn-primary mx-2'>-</button>
      Update Balance
      <button onClick={()=>{depositMoney(100)}} className='btn btn-primary mx-2'>+</button>
    </div>
  )
}

export default Shop
