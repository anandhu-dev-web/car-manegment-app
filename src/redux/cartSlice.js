import { createSlice } from '@reduxjs/toolkit';


const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadCartFromLocalStorage(), 
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const itemExists = state.items.some(item => item.id === newItem.id);

            if (!itemExists) {
                state.items.push(newItem);
                saveCartToLocalStorage(state.items); 
            }
        },
        
        removeFromCart: (state, action) => {
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
            saveCartToLocalStorage(state.items);
        },

        clearCart: (state) => {
            state.items = [];
            saveCartToLocalStorage(state.items); 
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
