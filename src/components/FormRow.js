import React from 'react'

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        className='form-input'
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default FormRow
