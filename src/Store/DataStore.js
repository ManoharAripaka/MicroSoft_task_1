import { createSlice } from "@reduxjs/toolkit";
const DataStore = createSlice({
    name: 'data',
    initialState: {
        who : 'all',
        cat : 'Trending',
        price : 999,
        position : {},
        cardData : {},
        display : 'none'
    },
    reducers: {
        updateWho : (state, action) => {state.who = action.payload},
        updateCat : (state, action) => {state.cat = action.payload},
        updatePrice : (state, action) => {state.price = action.payload},
        updatePosition : (state, action) => {state.position = action.payload},
        updateCardData : (state, action) => {state.cardData = action.payload},
        updateDisplay : (state, action) => {state.display = action.payload},  
    }
})
export const { updateWho, updateCat, updatePrice, updatePosition, updateCardData, updateDisplay} = DataStore.actions
export default DataStore.reducer