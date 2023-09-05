import {configureStore} from '@reduxjs/toolkit'
import Slice from './redux/Slice'
export default configureStore({
    reducer: {
     cart:Slice
    }
})