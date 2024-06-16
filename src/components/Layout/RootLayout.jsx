import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const RootLayout = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={2}>
              <Sidebar/>
          </Grid>
          <Grid item xs={10}>
              <Outlet/>
          </Grid>
        </Grid>
      </Box>
      
      
    
    </>
  )
}

export default RootLayout