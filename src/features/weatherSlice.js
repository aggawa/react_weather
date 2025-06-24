import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeathers } from '../api/weatherApi'

export const fetchWeathers = createAsyncThunk('weathers/fetchWeathers', async (cityName) => {
   const responsse = await getWeathers(cityName)
   console.log(responsse)
   return responsse.data.results
})

const weatherSlice = createSlice({
   name: 'weathers',
   initialState: {
      weathers: [],
      weatherDetails: null,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeathers.pending, (state) => {
            state.error = null
         })
         .addCase(fetchWeathers.fulfilled, (state, action) => {
            state.weatherDetails = action.payload
         })
         .addCase(fetchWeathers.rejected, (state, action) => {
            state.error = action.error.message
         })
   },
})

export default weatherSlice.reducer
