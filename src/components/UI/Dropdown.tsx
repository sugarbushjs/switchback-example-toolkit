import React, { FC, useEffect, useState } from 'react'
import { StatusTypes } from '../../features/status/status-slice'
import styled from 'styled-components'

type Props = {
  value: number,
  handleOnSelect: any
}

const StatusDropdown:FC<Props> = (props) => {
  const {value, handleOnSelect} = props
  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    const len = Object.keys(StatusTypes).length / 2;
    const values = Object.values(StatusTypes)

    const listValues: string[] = []
    for(let i=0;i<len;i++) {
      listValues.push(values[i].toString())
    }
    setOptions(listValues)
  }, [])

  const createOption = (option:string, index:number) => {
    return <option key={index} value={index}>{option}</option>
  }

  return (
    <div>
      <DropdownView value={value} name={'statusList'} id={'statusList'} onChange={handleOnSelect}>
        {options.map((item:string, index:number) => {
          return createOption(item, index)
        })}
      </DropdownView>
    </div>
  )
}

export default StatusDropdown

const DropdownView = styled.select`
  max-width: 100%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  font-size: 26px;
  background-color: azure;
  `