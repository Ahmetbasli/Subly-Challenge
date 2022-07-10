import React from 'react'

//styles
import Header from '../Header/Header'
import { Container } from '@mui/material'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
