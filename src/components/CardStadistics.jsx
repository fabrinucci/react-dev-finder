import { useContext } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { AppContext } from "../context";

export const CardStadistics = () => {
  const { userState } = useContext(AppContext);

  const { public_repos, followers, following } = userState;

  return (
    <Paper
      sx={{
        color: "#d5c2e9",
        backgroundColor: "rgba(62, 18, 105, .84)",
      }}
      elevation={3}
    >
      <Stack
        justifyContent="space-around"
        margin="20px 0"
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: "20px",
        }}
      >
        <Stack spacing={1} alignItems="center">
          <Typography>Repos</Typography>
          <Typography>{public_repos}</Typography>
        </Stack>
        <Stack spacing={1} alignItems="center">
          <Typography>Follows</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack spacing={1} alignItems="center">
          <Typography>Following</Typography>
          <Typography>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
