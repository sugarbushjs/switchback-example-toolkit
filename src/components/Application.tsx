import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CounterActions, CounterDispatch } from '../features/counter/counter-slice'
import { StatusActions } from '../features/status/status-slice'
import { SystemActions, SystemDispatch } from '../features/system/systemSlice'
import { ZoneTypes } from '../utilities/date-util'
import * as Selectors from '../selectors'
import TimeZone from './TimeZone/index'
import Button, { ButtonType } from './UI/Button'
import Dropdown from './UI/Dropdown'
import Switch from 'react-switch'
import styled from 'styled-components'
import logo from '../assets/logo-sm.png'

const Application = () => {
  const dispatch = useDispatch()
  const systemDpt = SystemDispatch()
  const counterDpt = CounterDispatch()

  const theme = useSelector(Selectors.selectTheme)
  const timeZone =  useSelector(Selectors.selectTimeZone)
  const status = useSelector(Selectors.selectStatus)
  const counter = useSelector(Selectors.selectCount)

  // @ts-ignore
  const [themeChecked, setThemeChecked] = useState<boolean>(false)

  // @ts-ignore
  const [zoneChecked, setZoneChecked] = useState<boolean>(false)

  useEffect(() => {
    systemDpt(SystemActions.fetchSystemTheme())
    // eslint-disable-next-line
  }, [])

  const handleButtonClick = (e:any) => {
    if (e === ButtonType.plus) {
      counterDpt(CounterActions.increment)
    } else {
      counterDpt(CounterActions.decrement)
    }
  }

  const handleSwitchChange = (value: boolean) => {
    const theme = value ? 'dark' : 'light'
    systemDpt(SystemActions.setTheme(theme))
    setThemeChecked(value)
  }

  const handleTimezoneChange = (value: boolean) => {
    const zone = value ? ZoneTypes.UTC : ZoneTypes.Local
    setZoneChecked(value)
    systemDpt(SystemActions.setZone(zone))
  }

  const handleOnSelect = (e: any) => {
    const value = e.target.value || 0
    dispatch(StatusActions.setStatus(value))
  }

  return (
    <AppContainer theme={theme}>
      <CenterAlignView>
        <h1>Sugarbush for react / redux</h1>
        <img src={logo} alt={'logo'} />
        <h2>with Redux Toolkit</h2>
      </CenterAlignView>
      <hr />
      <h3>This sections uses the <u>AdaptiveStore</u> to create a system dispatch.
        <br/>Note: Only the System Reducer will be called.
      </h3>
      <PaddedDevView>
        Set Theme: <Switch checked={themeChecked} onChange={handleSwitchChange} />
      </PaddedDevView>
      <PaddedDevView>
        Set Timezone: <Switch checked={zoneChecked} onChange={handleTimezoneChange} />
        <TimeZone zone={timeZone} />
      </PaddedDevView>
      <hr/>
      <div>
        <h3>This section uses the <u>AdaptiveDispatch</u> to create a counter dispatch.
          <br/>Note: Only the Counter reducer will be called.
        </h3>
        Counter
        <Button type={ButtonType.plus} value={'+'} handleOnClick={handleButtonClick} />
         <span style={{padding: 5}}>
           {counter}
         </span>
        <Button type={ButtonType.minus} value={'-'} handleOnClick={handleButtonClick} />
      </div>
      <hr />
      <div>
        <h3>This section uses the redux useDispatch() instead of AdaptiveStore or AdaptiveDispatch. This displays that Switchback
          can still process state without a key.
          <br/>Note: All Reducers will be called.
          <p>Note: '{'=>'} running combinedReducer logic' will output to the console log.</p>
        </h3>
        Current Status: {status}
        <Dropdown handleOnSelect={handleOnSelect} value={status}  />
      </div>
      <div>
        <hr />
        Open developer tools (F12) window to review switchback logging.
      </div>
    </AppContainer>
  )
}

export default Application

const AppContainer = styled.div<{theme: string}>`
  width: 100%;
  height: 100vh;
  padding: 15px;
  background-color: ${props => props.theme === 'dark' ? 'black' : 'white'};
  color: ${props => props.theme === 'dark' ? 'white' : 'black'};
`

const CenterAlignView = styled.div`
  text-align: center;
  `

const PaddedDevView = styled.div`
  padding-top: 15px;
  padding-bottom: 15px
  `