import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

const defaultValues = [
  {
    id: '',
    title: '',
    body: '',
  }
]

const columns = [
  {
    flex: 0.2,
    minWidth: 230,
    field: 'title',
    headerName: 'Title',
    renderCell: ({ row }) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            {/* <Link href={{ pathname:`/home/getPostsData`, query: {id}}} passHref> */}
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.title}
            </Typography>
            {/* </Link> */}

            <Typography noWrap component='a' variant='caption' sx={{ textDecoration: 'none' }}>
              {row.userId}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 400,
    field: 'body',
    headerName: 'Body',
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant='body2'>
          {row.body}
        </Typography>
      )
    }
  }
]

const Table_secondary = ({ posts }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <DataGrid
            autoHeight
            columns={columns}
            rows={posts ?? defaultValues}
            rowsPerPageOptions={[10, 25, 50]}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Table_secondary
