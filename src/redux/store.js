import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import authSlice from './authslice';
import productSlice from './productSlice';

const store = configureStore({
    reducer: {
        users: userSlice,
        auth: authSlice,
        products: productSlice,
    }
});

export default store;