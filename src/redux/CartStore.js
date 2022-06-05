import { createStore } from 'redux';
import CartReducer from './reducers/cartReducer';

const CartStore = createStore(CartReducer);

export default CartStore;
