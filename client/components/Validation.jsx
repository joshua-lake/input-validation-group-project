import React from 'react'

import { validateEmail } from './validationHelper'

function Validation () {
  console.log(validateEmail('josh@joshiscool.com'))
  return (
    <div>
      <h1>Team Kraken&apos;s Validation component</h1>
    </div>
  )
}

export default Validation
