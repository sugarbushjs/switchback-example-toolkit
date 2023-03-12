import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { adaptiveDispatch } from 'sugarbush'
import { store } from '../../components/App/store'
import { Message } from '../../components/UI/Message'
export const COUNTER_STATE = 'CounterState'
const title = 'Counter Reducer'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state: any) => {
      Message(title, 'increment')
      state.value += 1
    },
    decrement: (state: any) => {
      Message(title, 'decrement')
      state.value -= 1
    },
  },
  extraReducers: builder => {
    builder
      .addDefaultCase((state, action) => {
        Message(`${title} Default`, action.type)
      })
  }
})

/**
 * CounterDispatch uses the AdaptiveDispatch instead of the store. Make
 * sure the variable is capitalized since it needs to pass in a hook (useDispatch). Also,
 * dispatch could be assigned from store.dispatch(). This would allow for
 * camel casing
 * */
export const CounterDispatch = () => adaptiveDispatch({ dispatch: useDispatch(), key: COUNTER_STATE})

/**
 * Alternate way of creating the counterDispatch from the store. This allows for camel casing
 * */
export const counterDispatch = () => adaptiveDispatch({ dispatch: store.dispatch, key: COUNTER_STATE})

export const CounterActions = counterSlice.actions
export default counterSlice.reducer
