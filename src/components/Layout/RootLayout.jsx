import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


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