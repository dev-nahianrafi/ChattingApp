// eslint-disable-next-line no-unused-vars
import React from 'react'
import TextField from '@mui/material/TextField';


// eslint-disable-next-line react/prop-types
const Inputbox = ({variant,placeholder,autoComplete,type,id,name,value,onChange}) => {
  return (
    <>
      <TextField 
      fullWidth 
      id={id}
      label={placeholder} 
      variant={variant} 
      autoComplete={autoComplete}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      />
    </>
  )
}

export default Inputbox