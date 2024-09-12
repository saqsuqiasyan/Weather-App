import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_KEY } from "../apiKey"

const initialState = {
    error:null,
    loading:false,
    data:null
}

export const fetchWeather = createAsyncThunk("weather/getWeather",async (cityName)=>{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`)
        const data = await response.json()
        return data
    } catch(error) {
        console.log(error)
    }
})

const weatherSlice = createSlice({
    name:"weather",
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchWeather.pending, state => {
            state.loading = true
        }).addCase(fetchWeather.fulfilled, (state,action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        }).addCase(fetchWeather.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })

    }

})

const weatherReducer = weatherSlice.reducer
export default weatherReducer
