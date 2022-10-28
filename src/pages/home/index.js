// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Table_secondary from './table_secondary'
import Description from './description'
import Table from './table'

import { useEffect, useState } from 'react'

const Home = () => {
  /* States */
  const [userId, setUserId] = useState()
  const [posts, setPosts] = useState(null)

  const fetchPostData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(data => data.json())
      .then(setPosts)
  }

  useEffect(() => {
    fetchPostData()
  }, [userId])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <Description />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Table setUserId={setUserId} />
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <Table_secondary posts={posts} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
