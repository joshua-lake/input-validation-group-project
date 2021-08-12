const testEmail = 'jj@joshiscool.com.com'

export function validateEmail (email) {
  const emailTest = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  const validation = emailTest.test(email)
  return validation
    ? {
      validated: validation
    }
    : {
      validated: validation,
      errMsg: 'not a valid email'
    }
}
