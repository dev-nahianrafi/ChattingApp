// import React from 'react'
import TextField from '@mui/material/TextField';


const Inputbox = ({variant,placeholder}) => {
  return (
    <TextField fullWidth id="standard-basic" label={placeholder} variant={variant} />
  )
}

export default Inputbox