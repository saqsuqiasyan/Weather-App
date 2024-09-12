import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherSlice";
import temperatureTypeReducer from "./slices/temperatureTypeSlice";


const store = configureStore({
    reducer: {
        weather:weatherReducer,
        temperatureType:temperatureTypeReducer,
    }
});

export default store;