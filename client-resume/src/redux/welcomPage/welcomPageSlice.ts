import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface WelcomPageState {
  typingTextEnd: boolean
}

const initialState: WelcomPageState = {
    typingTextEnd: false,
}

export const welcomPageSlice = createSlice({
  name: 'welcomePageState',
  initialState,
  reducers: {
    changeStatusTyping: (state) => {
      state.typingTextEnd = true
    }
  },
})

export const { changeStatusTyping} = welcomPageSlice.actions

export const selectWelcomPage = (state: RootState) => state.welcomPage.typingTextEnd

export default welcomPageSlice.reducer