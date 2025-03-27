import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { productListReducer } from './reducers/productsReducers';
import { userLoginReducer } from './reducers/userReducers';
import { productDetailsReducer } from "./reducers/productsReducers";
import { userRegisterReducer,} from "./reducers/userReducers";


const cartItemsFromStorage = localStorage.getItem('cartItems') 
  ? JSON.parse(localStorage.getItem('cartItems')) 
  : [];

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : null;

    
    const initialState = {
      cart: { cartItems: cartItemsFromStorage },
      userLogin: { userInfo: userInfoFromStorage }
  };  

// const middleware = [thunk];

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk),
});

export default store;