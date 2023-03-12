import React, { FC } from 'react'
import styled from 'styled-components'
export enum ButtonType {
  plus,
  minus,
  multiply
}

type Props = {
  type: ButtonType,
  value: string,
  handleOnClick: (value: any) => void
}

const Button:FC<Props> = (props) => {
  const { type, value, handleOnClick } = props
  return (
    <ButtonStyle onClick={(e:any) => handleOnClick(type)}>{value}</ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
  background-color: cadetblue;
  border: none;
  color: white;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 3px;
`

