export const CreateActionType = (typeName: string, action: any, key:string = '') => {
  return ({type: typeName, action:action, key: key})
}

export const CreateDispatchedType = (typeName: string, key:string='') => {
  return ({type: typeName, key: key})
}