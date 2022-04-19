import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import welcomPageReducer from './welcomPage/welcomPageSlice'


export const store = configureStore({
  reducer: {
    counter:counterReducer,
    welcomPage:welcomPageReducer
},
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch