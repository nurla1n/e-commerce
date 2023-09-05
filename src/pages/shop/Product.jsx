import React, { useContext } from "react";
import "./shop.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/Slice";
function Product(props) {
const dispatch=useDispatch()
const {array}=useSelector(state=>state.cart)
const { id, productName, price, productImage } = props.data;
// console.log(id)
// console.log(array)
let index=array[id-1]
// console.log(index)
  return (
    <>
      <div className="product">
        <img src={productImage} alt="photo" />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p>
            <b>{price}$</b>
          </p>
        </div>
        <button onClick={() =>dispatch(addToCart(id))} className="addToCartBttn">
          Add to Cart {index>0 && <span>{index}</span>}
        </button>
      </div>
      {/* onClick={()=>addToCart(id)} {cartItemAmount>0 && <>{cartItemAmount}</>} */}
    </>
  );
}

export default Product;
