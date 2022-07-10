//styles
import { Box, Typography, LinearProgress } from '@mui/material'

const TranscribingGlassCard: React.FC = () => {
  return (
    <Box
      width="100%"
      height="150px"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.80)',
        position: 'absolute',
        zIndex: 2,
        top: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography color="secondary">Transcribing subtitles</Typography>
      <Box width="80%" sx={{ mt: '30px' }}>
        <LinearProgress />
      </Box>
    </Box>
  )
}
export default TranscribingGlassCard
