import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import topBlogReducer from './topBlog/topBlogSlice';
import imgReducer from './img/imgSlice';

const reducers = {
    topBlog: topBlogReducer,
    img: imgReducer,
};

const rootReducer = combineReducers(reducers);

export const store = configureStore({
    reducer: rootReducer
});

// Define type for hooks
type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();