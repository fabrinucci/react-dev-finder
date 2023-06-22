import { useContext } from "react";
import { CardContent, Stack, Typography } from "@mui/material";
import { AppContext } from "../context";

export const CardInfo = () => {
  const { userState } = useContext(AppContext);
  const { name, login: username, created_at } = userState;

  return (
    <CardContent
      sx={{
        padding: "10px 0",
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        sx={{
          textAlign: {
            xs: "center",
            sm: "left",
          },
        }}
      >
        {name}
      </Typography>
      <Stack
        justifyContent="space-between"
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          textAlign: {
            xs: "center",
            sm: "left",
          },
        }}
      >
        <Typography variant="body2">@{username}</Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: {
              xs: "10px",
              sm: 0,
            },
          }}
        >
          {created_at?.slice(0, 10)}
        </Typography>
      </Stack>
    </CardContent>
  );
};
