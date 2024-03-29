import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
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
    decrementAny: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
    incrementAny: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, decrementAny, incrementAny } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer