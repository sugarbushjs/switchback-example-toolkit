import { switchback } from 'sugarbush'
import SystemState from './system/systemSlice'
import CounterState from './counter/counter-slice'
import StatusState from './status/status-slice'

/**
 * This will allow the store to use Sugarbush - switchback
 * */
const reducers = switchback({
  SystemState,
  CounterState,
  StatusState,
})

export default reducers