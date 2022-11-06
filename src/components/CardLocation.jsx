import { Grid, Link, Stack, Typography } from '@mui/material';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';
import GitHubIcon from '@mui/icons-material/GitHub';

export const CardLocation = ({ userState}) => {

  const { 
    login: username,
    blog,
    location,
    twitter_username: twitter,
    html_url: github_profile
  } = userState;

  return (
    <Grid 
      container
      spacing={3}
      marginTop='20px'
    >
      <Grid item xs={6}>
        <Stack direction='row' spacing={1}>
          <LocationOnIcon />
          <Typography>{ location ? location : 'Location  unknown' }</Typography>
        </Stack>
      </Grid>

      <Grid item xs={6}>
        <Stack direction='row' spacing={1}>
          <GitHubIcon />
          <Link
            href={ github_profile }
            target='_blank'
            rel="noopener noreferrer"
            underline="hover"
          >
            <Typography>GitHub {username}</Typography>
          </Link>
        </Stack>
      </Grid>

      {
        blog && (
          <Grid item xs={6}>
            <Stack direction='row' spacing={1}>
              <LanguageIcon />
              <Link
                href={blog}
                target='_blank'
                rel="noopener noreferrer"
                underline="hover"
              >
                <Typography>{blog}</Typography>
              </Link>
            </Stack>
          </Grid>
        )
      }
      {
        twitter && (
          <Grid item xs={6}>
            <Stack direction='row' spacing={1}>
              <TwitterIcon />
              <Link
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                <Typography>@{twitter}</Typography>
              </Link>
            </Stack>
          </Grid>
        ) 
      }
    </Grid>
    
  )
}
