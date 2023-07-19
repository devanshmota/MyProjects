import { configureStore } from "@reduxjs/toolkit";
import allcardSlice from './allcardSlice';
import descriptionSlice from './descriptionSlice';
import titleSlice from './titleSlice';

const store = configureStore({
    reducer: {
        title: titleSlice.reducer,
        description: descriptionSlice.reducer,
        allcards: allcardSlice.reducer
    }
})

export default store;