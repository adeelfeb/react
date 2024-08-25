import { useState } from 'react'

import {CssBaseline, Grid} from '@mui/material'
// import {CssBaseline, Grid} from '@material-ui/core'   for the older version

import Header from "./Components/Header/Header"
import List from "./Components/List/List"
import Map from "./Components/Map/Map"
import PlaceDetail from "./Components/PlaceDetail/PlaceDetail"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CssBaseline>
      <Header>

   
      </Header>
      <Grid container spacing={3} style={{width: "100%"}}>
        <Grid item xs={12} md={4}>
            <List></List>
        </Grid>
        <Grid item xs={12} md={8}>
            <Map></Map>
        </Grid>

      </Grid>
 
    </CssBaseline>
       
    </>
  )
}

export default App
