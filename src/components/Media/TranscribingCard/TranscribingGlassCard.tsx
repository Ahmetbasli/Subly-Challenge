//style
import { makeStyles } from '@mui/styles'
import { Box, Typography, LinearProgress } from '@mui/material'

const useStyles = makeStyles({
  glassCard: {
    width: '100%',
    height: '150px',
    backgroundColor: 'rgba(255, 255, 255, 0.80)',
    position: 'absolute',
    zIndex: 2,
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    color: '#5e5e5e',
  },
  load: {
    width: '80%',
    marginTop: '30px',
  },
})
const TranscribingGlassCard: React.FC = () => {
  const classes = useStyles()
  return (
    <Box className={classes.glassCard}>
      <Typography className={classes.text}>Transcribing subtitles</Typography>
      <Box className={classes.load}>
        <LinearProgress />
      </Box>
    </Box>
  )
}
export default TranscribingGlassCard
