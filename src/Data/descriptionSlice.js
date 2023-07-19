import { createSlice } from "@reduxjs/toolkit";

const descriptionSlice = createSlice({
    name: 'description',
    initialState: {
        rdescription: ""
    },
    reducers: {
        setDescription: (state, action) => {
            state.rdescription = action.payload;
        }
    }
})

export default descriptionSlice;
export const { setDescription } = descriptionSlice.actions;
