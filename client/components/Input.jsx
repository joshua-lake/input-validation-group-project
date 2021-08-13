import React from 'react'

function Input () {
  return (
    <>
      <div className='column is-half'>
        <h2>Your Details</h2>
        <form>
          <div className="field">
            <lable
              htmlFor='title'
              className='lable'>Email:</lable>
            <input
              id='title'
              name='title'
              className='input is-normal'
              type='text'
            />
          </div>
        </form>
        <button className='button'>Submit</button>
      </div>
    </>
  )
}

export default Input
