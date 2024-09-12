import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
};

const temperatureTypeSlice = createSlice({
    name: "temperatureType",
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value;  // Toggle the boolean state
        },
    },
});

export const { toggle } = temperatureTypeSlice.actions;
export default temperatureTypeSlice.reducer;
