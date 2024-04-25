import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Login = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <div style={{backgroundColor: "red", width: "100%", height: "100vh"}}>

          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login