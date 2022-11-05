import { Grid } from '@mui/material';
import { 
  CardDescription,
  CardImage,
  CardInfo
} from '../components/';

export const UserCard = ({ userState }) => {

  return (
    <Grid container spacing={1}>
      <Grid item xs={3} sx={{marginTop: '20px'}}>
        <CardImage userState={userState} />
      </Grid>
      <Grid item xs={9} sx={{marginTop: '20px'}}>
        <CardInfo userState={userState}/>
      </Grid>
      <Grid sx={{marginTop: '20px'}}>
        <CardDescription userState={userState}/>
      </Grid>
    </Grid>
  )
}
