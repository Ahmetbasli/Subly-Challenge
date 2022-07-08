import React, { useEffect, useState } from 'react'
import { fetchData } from '../../lib/fetchData'
import { Media } from '../../types/types'
import ISO6391 from 'iso-639-1'

//style
import {
  CircularProgress,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
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
  filters: {
    paddingTop: '100px',
    paddingBottom: '20px',
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
  const [languages, setLanguages] = useState<string[]>([])
  const classes = useStyles()
  // Fetch Media data when first rendered
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

  // Renew the language state(array of languages of all the mediums without overlaps)
  useEffect(() => {
    // Put every video's languages into an array
    const languagesWithOverlaps = []
    mediums.forEach((medium) => {
      languagesWithOverlaps.push(...medium.languages)
    })
    // Remove overlaps
    const languagesWithoutOverlaps = languagesWithOverlaps.filter(
      (language, i) => {
        return languagesWithOverlaps.indexOf(language) === i
      }
    )
    setLanguages(languagesWithoutOverlaps)
  }, [mediums])
  console.log(ISO6391.getName('cz'))
  return (
    <>
      <Box className={classes.container}>
        {/* Filters */}
        <Box className={classes.filters}>
          <FormControl variant="standard" sx={{ width: '20%', mr: '10px' }}>
            <InputLabel>Status</InputLabel>
            <Select>
              <MenuItem>All</MenuItem>
              <MenuItem>Ready</MenuItem>
              <MenuItem>Error</MenuItem>
              <MenuItem>Transcribing</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ width: '20%' }}>
            <InputLabel>Language</InputLabel>
            <Select>
              <MenuItem>All</MenuItem>
              {languages.length &&
                languages.map((language) => (
                  <MenuItem key={language}>
                    {ISO6391.getName(language)}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>

        {/* Media list */}
        <Box>
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
