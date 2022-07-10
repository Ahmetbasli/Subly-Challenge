import React from 'react'

//styles
import { AppBar, Toolbar, Typography } from '@mui/material'

const Header: React.FC = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h1">Subly</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
