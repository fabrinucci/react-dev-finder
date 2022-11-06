import { Grid, Stack } from '@mui/material';
import { 
  CardDescription,
  CardImage,
  CardInfo
} from '../components/';

export const UserCard = ({ userState }) => {

  return (
    <Grid container spacing={1} sx={{marginTop: '20px'}}>
      <Grid item xs={12} sm={5} md={4} lg={3}>
        <CardImage userState={userState} />
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={9}>
        <Stack
          spacing={1}
          sx={{ margin: '30px'}}
        >
          <CardInfo userState={userState}/>
          <CardDescription userState={userState}/>
        </Stack>
      </Grid>
    </Grid>
  )
}
