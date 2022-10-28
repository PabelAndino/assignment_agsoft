import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import MuiCardContent from '@mui/material/CardContent'

const CardContent = styled(MuiCardContent)(({ theme }) => ({
  padding: `${theme.spacing(7, 7.5)} !important`,
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '0 !important'
  }
}))

const Description = () => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(7, 7.5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h5' sx={{ mb: 4.5 }}>
              Single{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                Instruction
              </Box>
            </Typography>
            <Typography variant='body2'>
              In order to get the data in the second table you just have to
              <Box component='span' sx={{ fontWeight: 600 }}>
                click on any name
              </Box>{' '}
              in the name column.
            </Typography>

          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Description
