
export enum SystemTypes {
  FETCH_SYSTEM_THEM = 'FETCH_SYSTEM_THEM'
}

/* API Calls */
export const ExtendedActions = () => {
  return {
    id: 'systemState',
    actions: {
      fetchSystemTheme:() => ({ type: SystemTypes.FETCH_SYSTEM_THEM, key: 'SystemState'})
    }
  }
}
