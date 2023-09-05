import React from 'react'
import {PRODUCTS} from '../../products.js'
import Product from './Product.jsx'
function Shop() {
    
  return (
 <>
 <div className="shop">
  <div className='shopTitle'>
    <h1>E-Commerce Shop</h1>
  </div>
  <div className="container">
<div className="row">

    {PRODUCTS.map((product,index)=>(
    <Product key={index} data={product}/>
))}
  
</div>

  </div>
 </div>
 </>
  )
}

export default Shop