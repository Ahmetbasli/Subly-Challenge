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
  SelectChangeEvent,
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
  const [filteredMediums, setFilteredMediums] = useState<Media[]>(mediums)
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all')

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

  // Change state of status filter when one of its is chosen
  const handleStatusSelector = (e: SelectChangeEvent) => {
    setSelectedStatus(e.target.value)
  }
  // Change state of language filter when one of its value is chosen
  const handleLanguageSelector = (e: SelectChangeEvent) => {
    setSelectedLanguage(e.target.value)
  }
  // Change displayed mediums when selectors are used and when a new medium is added
  useEffect(() => {
    // Filter array of mediums by chosen status
    const firstFilteredMediums = filterMediumsByStatus(mediums)
    // Filter array of remaining mediums by chosen language
    const secondFilteredMediums = filterMediumsByLanguage(firstFilteredMediums)
    setFilteredMediums(secondFilteredMediums)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mediums, selectedStatus, selectedLanguage])

  // Filter mediums according to chosen status
  const filterMediumsByStatus = (mediums: Media[]) => {
    if (selectedStatus === 'all') {
      return mediums
    } else {
      return mediums.filter((medium) => {
        return medium.status === selectedStatus
      })
    }
  }
  // Filter mediums according to chosen language
  const filterMediumsByLanguage = (firstFilteredMediums: Media[]) => {
    if (selectedLanguage === 'all') {
      return firstFilteredMediums
    } else {
      return firstFilteredMediums.filter((medium) => {
        return medium.languages.includes(selectedLanguage)
      })
    }
  }

  return (
    <>
      <Box className={classes.container}>
        {/* Filters */}
        <Box className={classes.filters}>
          <FormControl variant="standard" sx={{ width: '20%', mr: '10px' }}>
            <InputLabel id="status-filter">Status</InputLabel>
            <Select
              labelId="status-filter"
              onChange={handleStatusSelector}
              value={selectedStatus}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="ready">Ready</MenuItem>
              <MenuItem value="error">Error</MenuItem>
              <MenuItem value="transcribing">Transcribing</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ width: '20%' }}>
            <InputLabel id="language-filter">Language</InputLabel>
            <Select
              labelId="language-filter"
              onChange={handleLanguageSelector}
              value={selectedLanguage}
            >
              <MenuItem value="all">All</MenuItem>
              {languages.length &&
                languages.map((language) => (
                  <MenuItem key={language} value={language}>
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
            filteredMediums.length && (
              <Grid container spacing={3}>
                {filteredMediums.map((medium) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={medium.id}>
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
