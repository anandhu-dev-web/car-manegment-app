import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isLogged:JSON.parse(localStorage.getItem("isLogged")) || false
}

const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        userLogin:(state,action)=>{
            state.user = action.payload;
            state.isLogged = true;

            localStorage.setItem('user',JSON.stringify(state.user));
            localStorage.setItem('isLogged',JSON.stringify(state.isLogged));
        },
        userLogout:(state)=>{
            state.user = null;
            state.isLogged = false;

            localStorage.setItem('user',JSON.stringify(state.user));
            localStorage.setItem('isLogged',JSON.stringify(state.isLogged));
        },
    }
})


export const {userLogin,userLogout} = authSlice.actions;
export default authSlice.reducer;