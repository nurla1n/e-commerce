import React, { useContext } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increase,decrease } from '../../redux/Slice'
function CartItem(props) {
    const  {id,productName,price,productImage}=props.data
    const{array,items}=useSelector(state=>state.cart)
    const dispatch=useDispatch()
  return (
<>
<div className="cartItem">
    <img src={productImage} alt="" />
    <div className="description">
        <p>
            <b>{productName}</b>
        </p>
        <p>
            <b>{price}</b>
        </p>
        <div className="countHandler">
            <button onClick={()=>dispatch(decrease(id))}  >-</button>
            <span>{array[id-1]}</span>
            <button onClick={()=>dispatch(increase(id))}>+</button>
        </div>
    </div>
</div>
</>
    )
}

export default CartItem