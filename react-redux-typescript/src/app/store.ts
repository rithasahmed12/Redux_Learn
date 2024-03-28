import { configureStore } from '@reduxjs/toolkit';
// import reduxLogger from 'redux-logger';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/user/userSlice';

const store = configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:iceCreamReducer,
        user:userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch