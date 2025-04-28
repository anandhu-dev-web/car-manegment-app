import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import authSlice from './authslice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';

const store = configureStore({
    reducer: {
        users: userSlice,
        auth: authSlice,
        products: productSlice,
        cart:cartSlice,
    }
});

export default store;