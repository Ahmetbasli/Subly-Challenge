import React from 'react'
import { Media } from '../../../types/types'

//style
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

//component
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
        <Typography gutterBottom variant="h6" component="div">
          {medium.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Transcribing
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TranscribingCard
