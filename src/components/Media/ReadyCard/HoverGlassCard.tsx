//style
import { makeStyles } from '@mui/styles'
import { Box, Button, IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

const useStyles = makeStyles({
  grassCard: {
    width: '100%',
    height: '150px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    zIndex: 2,
    top: '0',
  },
  deleteButtonSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px',
  },
  editButtonSection: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
})
const HoverGrassCard: React.FC = () => {
  const classes = useStyles()
  return (
    <Box className={classes.grassCard}>
      <Box className={classes.deleteButtonSection}>
        <IconButton sx={{ color: 'white', borderColor: 'white' }}>
          <DeleteOutlineIcon />
        </IconButton>
      </Box>
      <Box className={classes.editButtonSection}>
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
