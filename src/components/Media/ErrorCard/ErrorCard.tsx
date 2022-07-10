import React from 'react'
import { Media } from '../../../types/types'

//style
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

interface Props {
  medium: Media
}

const useStyles = makeStyles(() => ({
  mainSection: {
    backgroundColor: '#ef9a9a',
    width: '100%',
    paddingTop: '20px',
    paddingRight: '16px',
    paddingLeft: '16px',
    paddingBottom: '12px',
  },
  errorMessage: {
    display: 'flex',
    paddingBottom: '8px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

const ErrorCard: React.FC<Props> = ({ medium }) => {
  const classes = useStyles()
  return (
    <Card>
      <CardContent sx={{ p: 0 }}>
        {/* Card's main error message and buttons */}
        <Box className={classes.mainSection}>
          <Box className={classes.errorMessage}>
            <Box>
              <img
                src="/warning.png"
                alt="warning icon"
                style={{
                  height: '40px',
                  width: '40px',
                  display: 'flex',
                }}
              />
            </Box>
            <Typography color="text.secondary" data-testid="error-message">
              An error occured while processing your file. Delete file to try
              again, and report issues if the problem persists.
            </Typography>
          </Box>
          <Box className={classes.buttons}>
            <Button variant="outlined" color="secondary">
              Delete file
            </Button>
            <Button variant="contained" sx={{ mx: '10px' }}>
              Report issue
            </Button>
          </Box>
        </Box>
        {/* Card's information */}
        <Box sx={{ p: '16px 16px 0 22px ' }}>
          <Typography gutterBottom variant="h3" component="div">
            {medium.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Error in processing
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ErrorCard
