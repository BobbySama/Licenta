import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderMyListReducer,
  orderPayReducer,
} from './reducers/orderReducer';

const cartItemsStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAddressStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const reducer = combineReducers({
  storeProductList: productListReducer,
  storeProductDetails: productDetailsReducer,
  storeCart: cartReducer,
  storeUserLogin: userLoginReducer,
  storeUserRegister: userRegisterReducer,
  storeUserDetails: userDetailsReducer,
  storeUserProfile: userUpdateProfileReducer,
  storeUserList: userListReducer,
  storeOrderCreate: orderCreateReducer,
  storeOrderDetails: orderDetailsReducer,
  storeOrderPay: orderPayReducer,
  storeOrderMyList: orderMyListReducer,
});

const initialState = {
  storeCart: {
    cartItems: [...cartItemsStorage],
    shippingAddress: shippingAddressStorage,
  },
  storeUserLogin: { userInfo: userInfoStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
