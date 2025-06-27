import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeatherDetails, getCardDetails } from '../api/weatherApi'

export const fetchWeatherDetails = createAsyncThunk('weathers/fetchWeatherDetails', async (cityName) => {
   const response = await getWeatherDetails(cityName)
   // console.log(response.data)
   return response.data
})

export const fetchCardDetails = createAsyncThunk('weathers/fetchCardDetails', async (cityName) => {
   const response = await getCardDetails(cityName)
   return response.data
})

const weatherSlice = createSlice({
   name: 'weathers',
   initialState: {
      weatherDetails: null,
      cardDetails: null,
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
         .addCase(fetchCardDetails.pending, (state) => {
            state.error = null
         })
         .addCase(fetchCardDetails.fulfilled, (state, action) => {
            state.cardDetails = action.payload
         })
         .addCase(fetchCardDetails.rejected, (state, action) => {
            state.error = action.error.message
         })
   },
})

export default weatherSlice.reducer
