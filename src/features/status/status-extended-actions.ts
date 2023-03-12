
export enum StatusActionTypes {
  FETCH_STATUS = 'FETCH_STATUS'
}

export const ExtendedActions = () => {
  return {
    id: 'statusState',
    actions: {
      fetchStatus:(payload: number) => ({type: StatusActionTypes.FETCH_STATUS, payload: payload})
    }
  }
}