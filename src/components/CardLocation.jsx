import { Grid, Stack, Typography } from '@mui/material';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';
import GitHubIcon from '@mui/icons-material/GitHub';

export const CardLocation = ({ userState}) => {

  const { 
    blog,
    login,
    location,
    twitter_username: twitter,
    url
  } = userState;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOnIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
        </Stack>
      </Grid>
      {
        blog && (
          <Grid item xs={6}>
            <Stack>
              <LanguageIcon />
              <Typography>{ blog }</Typography>
            </Stack>
          </Grid>
        )
      }
      {
        twitter && (
          <Grid item xs={6}>
            <Stack>
              <TwitterIcon />
              <Typography>@{ twitter }</Typography>
            </Stack>
          </Grid>
        ) 
      }
      <Grid item xs={6}>
        <Stack>
          <GitHubIcon />
          <Typography>{ url }</Typography>
        </Stack>
      </Grid>
    </Grid>
    
  )
}
