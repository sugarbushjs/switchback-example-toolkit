import { ZoneTypes } from '../../utilities/date-util'

export type systemStateType = {
  theme: string
  timeZone: ZoneTypes,
  isLoading: boolean
}

export const defaultSystemState = ():systemStateType => {
  return {
    theme: '',
    timeZone: 0,
    isLoading: true
  }
}