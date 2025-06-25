import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeatherDetails } from '../api/weatherApi'

export const fetchWeatherDetails = createAsyncThunk('weathers/fetchWeatherDetails', async (cityName) => {
   const responsse = await getWeatherDetails(cityName)
   console.log(responsse.data)
   return responsse.data
})

const weatherSlice = createSlice({
   name: 'weathers',
   initialState: {
      weatherDetails: [],
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeatherDetails.pending, (state) => {
            state.error = null
         })
         .addCase(fetchWeatherDetails.fulfilled, (state, action) => {
            state.weatherDetails = action.payload
         })
         .addCase(fetchWeatherDetails.rejected, (state, action) => {
            state.error = action.error.message
         })
   },
})

export default weatherSlice.reducer
