import React, { useState } from 'react'
import { formatDistanceToNow, format, parseISO } from 'date-fns'

//styles
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import TranslateIcon from '@mui/icons-material/Translate'
//components
import { Media } from '../../../types/types'
import HoverGlassCard from './HoverGlassCard'

interface Props {
  medium: Media
}

const ReadyCard: React.FC<Props> = ({ medium }) => {
  // state to apply different UI when hovering over a ready card
  const [isHover, setIsHover] = useState<boolean>(false)

  // the function is triggered to change isHover state when hovering starts
  const handleMouseEnter = () => {
    setIsHover(true)
  }
  // the function is triggered to change isHover state when hovering finishes
  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <>
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ position: 'relative', zIndex: '1' }}
        data-testid="medium-image"
      >
        {/* Language chip placed on a card image */}
        <Grid
          container
          width="110px"
          sx={{
            position: 'absolute',
            top: '10%',
            zIndex: '2',
            ml: '10px',
          }}
        >
          <Grid
            item
            xs={3}
            sx={{
              backgroundColor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '3px 0 0 3px',
            }}
          >
            <TranslateIcon
              sx={{
                width: '15px',
                height: '15px',
                color: 'white',
              }}
            />
          </Grid>
          <Grid
            item
            xs={9}
            sx={{ background: 'white', borderRadius: '0 3px 3px 0' }}
          >
            <Typography variant="body2" color="secondary" sx={{ p: '4px' }}>
              {medium.languages.length >= 2
                ? `${medium.languages.length} languages`
                : `1 language`}
            </Typography>
          </Grid>
        </Grid>
        {/* Card's image (UI changes according to isHover state)*/}
        {!isHover ? (
          <CardMedia
            component="img"
            height="150"
            image={medium.cover}
            alt={medium.name}
          />
        ) : (
          <Box sx={{ position: 'relative', height: '150px' }}>
            <CardMedia
              component="img"
              height="150"
              image={medium.cover}
              alt={medium.name}
            />
            <HoverGlassCard />
          </Box>
        )}
        {/* card's information */}
        <CardContent>
          <Typography gutterBottom variant="h3">
            {medium.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            data-testid="last-edited"
          >
            Edited {''}
            {formatDistanceToNow(
              new Date(format(parseISO(medium.updatedAt), 'yyyy MM dd')),
              { addSuffix: true }
            )}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default ReadyCard
