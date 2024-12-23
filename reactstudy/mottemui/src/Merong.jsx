import { Box, IconButton, Typography } from '@mui/material'
import BabyChangingStationSharpIcon from '@mui/icons-material/BabyChangingStationSharp';

function Merong() {
  return (
    <Box display={"flex"} >
      <IconButton>
        <BabyChangingStationSharpIcon />
      </IconButton>
      <Typography variant='h3'>
         미강 메롱
      </Typography>
    </Box>
  )
}

export default Merong