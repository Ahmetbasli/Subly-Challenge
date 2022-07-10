//styles
import { Box, Button, IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

const HoverGrassCard: React.FC = () => {
  return (
    <Box
      width="100%"
      height="150px"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        zIndex: 2,
        top: '0',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: '10px' }}>
        <IconButton sx={{ color: 'white', borderColor: 'white' }}>
          <DeleteOutlineIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button
          variant="outlined"
          sx={{ color: 'white', borderColor: 'white', width: '20%' }}
        >
          Edit
        </Button>
      </Box>
    </Box>
  )
}
export default HoverGrassCard
