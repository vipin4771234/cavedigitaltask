import AsyncStorage from "@react-native-async-storage/async-storage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface User {
    userId: any;
    name: any;
    phone: any;
    role: any;
}

const initialState: any = {
    user: null
}

export const UserSlice = createSlice({
    name: 'User',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<any | null>) => {
            console.log('action.paylad',action.payload)
            state.user = action.payload;
        },
        logOut: (state) => {
            state.user = null;
            AsyncStorage.removeItem('user');
        }
    }
});

export const {login, logOut} = UserSlice.actions;
export default UserSlice.reducer;