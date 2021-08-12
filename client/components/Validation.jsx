import React from 'react'

import { validateEmail } from './validationHelper'

function Validation () {
  console.log(validateEmail('josh@joshiscool.com'))
  return (
    <div>
      Validation component
    </div>
  )
}

export default Validation