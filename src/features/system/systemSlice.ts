import { createSlice } from "@reduxjs/toolkit"
import { SystemTypes } from './system-extended-actions'
import { ExtendedActions } from './system-extended-actions'
import { defaultSystemState } from './system-mode'
import { ActionType } from '../../types/action-types'
import { adpStore } from '../../components/App'
import { Message } from '../../components/UI/Message'

export const SYSTEM_STATE = 'SystemState'
const title = 'System Reducer'

const systemSlice = createSlice({
  name: 'system',
  initialState: defaultSystemState,
  reducers: {
    setTheme: (state, action) => {
      Message(title, action.type)
      state.theme = action.payload;
    },
    setZone: (state, action) => {
      Message(title, action.type)
      state.timeZone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SystemTypes.FETCH_SYSTEM_THEM, (state: any, action: ActionType ) => {
        state.theme = action?.payload || 'light'
      })
      .addDefaultCase((state, action) => {
        Message(`${title} Default`, action.type)
      })
  }
})

/**
 SystemDispatch uses the AdaptiveStore to create the dispatch for system slice
 */
export const SystemDispatch = () => adpStore.dispatch(SYSTEM_STATE)


const extended = ExtendedActions()
export const SystemActions = {
  ...systemSlice.actions,
  ...extended.actions,
}

export default systemSlice.reducer


