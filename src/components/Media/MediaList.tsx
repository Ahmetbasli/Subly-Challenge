import React, { useEffect, useState } from 'react'
import { fetchData } from '../../lib/fetchData'
import { Media } from '../../types/types'

//style
import { CircularProgress, Box, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

//component
import ErrorCard from './ErrorCard/ErrorCard'
import ReadyCard from './ReadyCard/ReadyCard'
import TranscribingCard from './TranscribingCard/TranscribingCard'

const useStyles = makeStyles({
  container: {
    bgcolor: '#cfe8fc',
    height: '100vh',
  },
  mediaList: {
    paddingTop: '100px',
  },
  loading: {
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const MediaList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [mediums, setMediums] = useState<Media[]>([])
  const classes = useStyles()

  // fetch Media data when first rendered
  useEffect(() => {
    setIsLoading(true)
    fetchData(
      'https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b'
    ).then((data) => {
      const fetchedMedia = data.media
      setMediums(fetchedMedia)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.mediaList}>
          {isLoading ? (
            <Box className={classes.loading}>
              <CircularProgress size="80px" />
            </Box>
          ) : (
            mediums.length && (
              <Grid container spacing={3}>
                {mediums.map((medium) => (
                  <Grid item xs={6} md={4} lg={3} key={medium.id}>
                    {/* <MediumCard medium={medium} /> */}
                    {(() => {
                      switch (medium.status) {
                        case 'error':
                          return <ErrorCard medium={medium} />
                        case 'transcribing':
                          return <TranscribingCard medium={medium} />
                        default:
                          return <ReadyCard medium={medium} />
                      }
                    })()}
                  </Grid>
                ))}
              </Grid>
            )
          )}
        </Box>
      </Box>
    </>
  )
}

export default MediaList
