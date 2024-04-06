import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './api/interface';
import { getTopBlog } from './api';

const topBlogSlice = createSlice({
    name: 'topBlog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTopBlog.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(getTopBlog.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(getTopBlog.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default topBlogSlice.reducer;