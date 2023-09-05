import React, { useContext } from 'react'
import CartItem from './CartItem'
import {useNavigate} from 'react-router-dom'
import { PRODUCTS } from '../../products'
import { useSelector,useDispatch } from 'react-redux'
import { totalAmount } from '../../redux/Slice'
import './cart.css'
function Cart() {
const navigate=useNavigate()
const dispatch=useDispatch()
const {array,items}=useSelector(state=>state.cart)
const totalAmount=useSelector(state=>state.cart.sum)
console.log(totalAmount)
// console.log(array,items)
  return (
    <>
   
   <div className="cart">
    <div><h1>Your Cart Items</h1></div>
    <div className="cartItems">
     {
      PRODUCTS.map((data,index)=>{
       if(array[data.id-1]!==0){
        return <CartItem key={index} data={data} />
       }
      })
     }
    </div>
    {
     totalAmount>0?<div className="checkout">
    <h2>SubTotal:{totalAmount}$</h2>
    <button onClick={()=>navigate('/')}>Continue Shopping</button>
   </div>:<h1>Your Cart is Empty </h1>
}
    
  
   </div>
    </>
  )
}

export default Cart