import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeathers } from '../api/weatherApi'

export const fetchWeathers = createAsyncThunk('weathers/fetchWeathers', async () => {
   const responsse = await getWeathers()
   console.log(responsse)
})

const weatherSlice = createSlice({
   name: 'weathers',
   initialState: {
      weathers: [],
      weatherDetails: null,
      whetherHumidity: null,
      error: null,
   },
   reducer: {},
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
