import React from 'react'
import {Button, AppBar, Toolbar, Typography, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  loginBtn: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
  banner: {
    maxHeight: '500px',
  }
}))

function Home() {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <AppBar position="sticky" color="white">
        <Toolbar>
          <Typography variant="h4">
            YumKai!
            </Typography>
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
      <Paper elevation={0} className={classes.banner}>
        <img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/02/18/08/vegan.jpg' width='100%'/>
      </Paper>
    </div>
  )
}

export default Home;