import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice';
import TaskSlice from './TaskSlice';
// ...

const store = configureStore({
  reducer: {
    users: UserSlice,
    tasks: TaskSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 1000 },
    serializableCheck: { warnAfter: 1000 },
  })
})
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>