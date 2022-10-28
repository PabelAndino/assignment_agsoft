import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'


const mockData = [
  {
    id: 1,
    name: 'Pabel Ernesto Jimenez Andino',
    phone: '123123',
    email: 'pabelandino@gmail.com',
    website: 'none'
  }
]


const Table = ({ setUserId }) => {
  const [data, setData] = useState()

  const fetchUserData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(data => setData(data))
  }

  const columns = [
    {
      flex: 0.2,
      minWidth: 230,
      field: 'name',
      headerName: 'Name',
      renderCell: ({ row }) => {
        const { id, name } = row

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}
              onClick={() => {
                setUserId(id)
              }}
            >
              {/* <Link href={{ pathname:`/home/getPostsData`, query: {id}}} passHref> */}
              <Typography
                noWrap
                component='a'
                variant='subtitle2'
                sx={{ color: 'text.primary', textDecoration: 'none' }}
              >
                {name}
              </Typography>
              <Typography noWrap component='a' variant='caption' sx={{ textDecoration: 'none' }}>
                {row.username}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 400,
      field: 'email',
      headerName: 'Email',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {row.email}
          </Typography>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 400,
      field: 'phone',
      headerName: 'Phone',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {row.phone}
          </Typography>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 400,
      field: 'website',
      headerName: 'Web Site',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {row.website}
          </Typography>
        )
      }
    }
  ]

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <DataGrid
            autoHeight
            columns={columns}
            rows={data ?? mockData}
            rowsPerPageOptions={[10, 25, 50]}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Table
