import {legacy_createStore , combineReducers , applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools }from 'redux-devtools-extension'
import  { productTopRatedReducer ,productReviewCreateReducer ,productUpdateReducer ,productCreateReducer , productDeleteReducer, productListReducer ,productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userUpdateReducer ,userDeleteReducer ,userListReducer,userLoginReducer,userRegisterReducer ,userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'
import {orderDeliverReducer,orderListReducer ,orderListMyReducer , orderCreateReducer ,orderDetailsReducer,orderPayReducer }from './reducers/orderReducers'



const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate : productCreateReducer,
    productUpdate : productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated : productTopRatedReducer,

    cart: cartReducer,
    userLogin : userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails : userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList : orderListReducer,
    orderDeliver : orderDeliverReducer,


})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
  JSON.parse(localStorage.getItem('cartItems')):[]


const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')):null


const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
  JSON.parse(localStorage.getItem('shippingAddress')):{}










const initialState = { 
    cart:{cartItems: cartItemsFromStorage, 
    shippingAddress:  shippingAddressFromStorage, 
    },
    userLogin: {userInfo:userInfoFromStorage},
 }
const middleware = [thunk]

const store = legacy_createStore(reducer,initialState,composeWithDevTools(applyMiddleware(... middleware)))

export default store



