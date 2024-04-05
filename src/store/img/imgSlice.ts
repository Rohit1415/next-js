import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './api/interface';
import { getImg } from './api';


const imgSlice = createSlice({
    name: 'img',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getImg.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(getImg.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(getImg.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default imgSlice.reducer;