import { createSlice } from '@reduxjs/toolkit'
import { Message } from '../../components/UI/Message'
import { ActionType } from '../../types/action-types'
import { StatusActionTypes } from './status-extended-actions'
import { ExtendedActions} from './status-extended-actions'

export enum StatusTypes {
  Available,
  Busy,
  Offline
}

const title = 'Status Reducer'

const statusSlice = createSlice({
  name:'status',
  initialState: {
    myStatus: -1
  },
  reducers: {
    setStatus: (state, action: ActionType) =>  {
      Message(title, action.type)
      const status = action.payload
      state.myStatus = Number(status)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(StatusActionTypes.FETCH_STATUS, (state: any, action: ActionType) => {
        state.myStatus = action.payload || 2
      })
      .addDefaultCase((state, action) => {
        Message(`${title} Default`, action.type)
      })
  }
})

const extended = ExtendedActions()
export const StatusActions = {
  ...statusSlice.actions,
  ...extended.actions,
}

export default statusSlice.reducer