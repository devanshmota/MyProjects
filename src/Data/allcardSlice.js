import { createSlice } from "@reduxjs/toolkit";

const allcardSlice = createSlice({
    name: 'cards',
    initialState: {
        rcards: []
    },
    reducers: {
        setAllCard: (state, action) => {
            state.rcards = action.payload;
        }
    }
})

export default allcardSlice;
export const { setAllCard } = allcardSlice.actions;