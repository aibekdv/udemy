import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import user from "./user/slice"


export const store = configureStore({
  reducer: { user },
})

type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()