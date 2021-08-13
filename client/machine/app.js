const appMachine = {
  id: 'app',
  context: {},
  initial: 'active',
  states: {
    active: {
      on: { TOGGLE: 'inactive' }
    },
    inactive: {
      on: { TOGGLE: 'active' }
    }
  }
}

export default appMachine
