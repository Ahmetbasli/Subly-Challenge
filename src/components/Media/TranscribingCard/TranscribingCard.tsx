import React from 'react'
import { Media } from '../../../types/types'

//styles
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

//components
import TranscribingGlassCard from './TranscribingGlassCard'

interface Props {
  medium: Media
}

const TranscribingCard: React.FC<Props> = ({ medium }) => {
  return (
    <Card>
      <Box sx={{ position: 'relative', height: '150px' }}>
        {/* Card's glass effect */}
        <TranscribingGlassCard />
        {/* Card's image and information */}
        <CardMedia
          component="img"
          height="150px"
          image={medium.cover}
          alt={medium.name}
          sx={{ position: 'absolute', zIndex: 1, top: '0' }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h3">
          {medium.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Transcribing
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TranscribingCard
