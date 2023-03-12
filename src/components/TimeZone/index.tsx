import React, { FC } from 'react'
import { DateConvert, ZoneTypes } from '../../utilities/date-util'


type Props = {
  zone: ZoneTypes
}

const TimeZone:FC<Props> = (props) => {

  const datetime = DateConvert(props.zone)
  return (
    <div>
      { datetime.toString() }
    </div>
  )
}

export default TimeZone