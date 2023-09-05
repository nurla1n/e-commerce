import { useEffect, useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import Navbar from './componets/Navbar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import { totalAmount } from './redux/Slice'
function App() {
  const [count, setCount] = useState(0)
  const dispatch=useDispatch()
  const {items,array}=useSelector(state=>state.cart)
  
  useEffect(()=>{
  dispatch(totalAmount())
  },[items,array])
  return (
    <>
    <Navbar/>
  <Routes>
  <Route path='/' element={<Shop/>} />
  <Route path='/cart' element={<Cart/>}/>
  </Routes>
    </>
  )
}

export default App
