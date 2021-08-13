import React from 'react'

import { createMachine } from 'xstate'

import { useMachine } from '@xstate/react'
import appMachine from '../machine/app'

function Toggle () {
  const machine = createMachine(appMachine)

  const [current, send] = useMachine(machine)

  return (
    <button onClick={() => send('TOGGLE')}>
      {current.matches('inactive') ? 'Off' : 'On'}
    </button>
  )
}
export default Toggle
