import React from 'react'

//style
import Header from '../Header/Header'
import { Container } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
  },
})
const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <Container className={classes.page}>{children}</Container>
    </>
  )
}

export default Layout
