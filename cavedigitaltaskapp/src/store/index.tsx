import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice';
// ...

const store = configureStore({
  reducer: {
    users: UserSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 1000 },
    serializableCheck: { warnAfter: 1000 },
  })
})
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>