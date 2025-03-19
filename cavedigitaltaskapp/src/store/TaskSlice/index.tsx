import AsyncStorage from "@react-native-async-storage/async-storage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: any = {
    tasks: null
}

export const TaskSlice = createSlice({
    name: 'Task',
    initialState: initialState,
    reducers: {
        setTasksList: (state, action: PayloadAction<any | null>) => {
            console.log('action.paylad',action.payload)
            state.tasks = action.payload;
        },
    }
});

export const {setTasksList} = TaskSlice.actions;
export default TaskSlice.reducer;