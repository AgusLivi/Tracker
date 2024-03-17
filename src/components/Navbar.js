import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/assets/images/Logo.png'

function Navbar() {
  return (

    <Stack 
      direction="row"
      justifyContent="space-around" sx={{ gap: {
        sm:"112px", xs: "40px"
      }, mt: { sm: "32px", xs: "20px"}, justifyContent: 'none'}} px="20px"
    >
      <Link to="/">
        <img src={Logo} alt='logo' 
        style={{
          width: '48px',
          height: '48',
          margin: '0 20px',
        }}/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        >
        <Link to='/' style={{
          textDecoration: 'none',
          color:"#3A1212",
          borderBottom: "3px solid #FF2625"
        }}>Incio</Link>
        <a href='#exercises' style={
          {
            textDecoration: 'none',
             color: "#3A1212",
          }
        }>Ejercicios</a>
      </Stack>
    </Stack>

  )
}

export default Navbar