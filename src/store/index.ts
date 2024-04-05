import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import topBlogReucer  from './topBlog/topBlogSlice';

const reducers = {
    topBlog: topBlogReucer
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