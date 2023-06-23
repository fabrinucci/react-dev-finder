import { useContext } from "react";
import { Grid, Link, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AppContext } from "../context";

export const CardLocation = () => {
  const { userState } = useContext(AppContext);

  const {
    login: username,
    blog,
    location,
    twitter_username: twitter,
    html_url: github_profile,
  } = userState;

  const webPage = (page) => {
    if (page.includes("http://")) return page;
    if (!page.includes("https://")) return `https://${page}`;
    return page;
  };

  return (
    <Grid
      container
      spacing={3}
      marginTop="20px"
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: {
          xs: "center",
          sm: "start",
        },
      }}
    >
      <Grid item xs={12} md={6}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <LocationOnIcon color="primary" />
          <Typography>{location ? location : "Unknown"}</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <GitHubIcon color="primary" />
          <Link
            href={github_profile}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            <Typography>@{username}</Typography>
          </Link>
        </Stack>
      </Grid>

      {blog && (
        <Grid item xs={12} sm={6}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <LanguageIcon color="primary" />
            <Link
              href={webPage(blog)}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              <Typography>{blog}</Typography>
            </Link>
          </Stack>
        </Grid>
      )}
      {twitter && (
        <Grid item xs={12} sm={6}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <TwitterIcon color="primary" />
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
      )}
    </Grid>
  );
};
