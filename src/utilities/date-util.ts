
export enum ZoneTypes {
  Local,
  UTC
}

export function DateConvert(dateType: ZoneTypes) {
  const localDateTime = new Date()

  if(dateType === ZoneTypes.Local)
    return localDateTime

  return localDateTime.toUTCString()
}