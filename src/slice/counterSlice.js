import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1000,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
      
    },
    decrement: (state) => {
      state.value -= 1
      
    },

  },
})

export const { increment, decrement} = counterSlice.actions

export default counterSlice.reducer