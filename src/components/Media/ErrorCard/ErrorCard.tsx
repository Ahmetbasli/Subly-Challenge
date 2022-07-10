import React from 'react'
import { Media } from '../../../types/types'

//styles
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
interface Props {
  medium: Media
}

const ErrorCard: React.FC<Props> = ({ medium }) => {
  return (
    <Card>
      <CardContent sx={{ p: 0 }}>
        {/* Card's main error message and buttons */}
        <Box
          width="100%"
          sx={{
            backgroundColor: '#ef9a9a',
            pt: '20px',
            paddingX: '16px',
            pb: '12px',
          }}
        >
          <Box sx={{ display: 'flex', pb: '8px' }}>
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
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
          <Typography gutterBottom variant="h3">
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
