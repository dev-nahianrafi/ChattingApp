// eslint-disable-next-line no-unused-vars
import React from 'react'
import TextField from '@mui/material/TextField';


// eslint-disable-next-line react/prop-types
const Inputbox = ({variant,placeholder}) => {
  return (
    <>
      <TextField fullWidth id="standard-basic" label={placeholder} variant={variant} />
    </>
  )
}

export default Inputbox