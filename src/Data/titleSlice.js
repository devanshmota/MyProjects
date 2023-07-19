import { createSlice } from "@reduxjs/toolkit";

const titleSlice = createSlice({
    name: 'title',
    initialState: {
        rtitle: ""
    },
    reducers: {
        setTitle: (state, action) => {
            state.rtitle = action.payload;
        }
    }
})

export default titleSlice