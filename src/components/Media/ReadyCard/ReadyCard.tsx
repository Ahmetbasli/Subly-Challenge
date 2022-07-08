import React from 'react'
import { formatDistanceToNow, format, parseISO } from 'date-fns'

//style
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import TranslateIcon from '@mui/icons-material/Translate'
//component
import { Media } from '../../../types/types'

interface Props {
  medium: Media
}

const useStyles = makeStyles({
  cardMedia: {
    position: 'relative',
    zIndex: '1',
  },
  languageChip: {
    position: 'absolute',
    top: '18%',
    zIndex: '2',
    marginLeft: '10px',
  },
  translationIconBox: {
    background: '#8a50f7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '3px 0 0 3px',
  },
  translationIcon: {
    color: 'white',
  },
  languageText: {
    background: 'white',
    borderRadius: '0 3px 3px 0',
  },
})

const ReadyCard: React.FC<Props> = ({ medium }) => {
  const classes = useStyles()
  return (
    <Card>
      {/* Language chip */}
      <Grid
        container
        className={classes.languageChip}
        sx={{
          width: '110px',
        }}
      >
        <Grid item xs={3} className={classes.translationIconBox}>
          <TranslateIcon
            className={classes.translationIcon}
            sx={{
              width: '15px',
              height: '15px',
            }}
          />
        </Grid>
        <Grid item xs={9} className={classes.languageText}>
          <Typography variant="caption" sx={{ color: '#5e5e5e', p: '4px' }}>
            {medium.languages.length >= 2
              ? `${medium.languages.length} languages`
              : `1 language`}
          </Typography>
        </Grid>
      </Grid>
      {/* Card's image and information */}
      <CardMedia
        component="img"
        height="150"
        image={medium.cover}
        alt={medium.name}
        className={classes.cardMedia}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {medium.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Edited {''}
          {formatDistanceToNow(
            new Date(format(parseISO(medium.updatedAt), 'yyyy MM dd')),
            { addSuffix: true }
          )}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ReadyCard
