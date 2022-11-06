import { Stack, Typography } from "@mui/material";
import { CardLocation } from "./CardLocation";
import { CardStadistics } from "./CardStadistics";

export const CardDescription = ({ userState }) => {
  const { bio } = userState;

  return (
    <>
      <Stack spacing={2}>
        <Typography marginBottom={2}>
          {
            bio || 'This user does not have a description' 
          }
        </Typography>    
      </Stack>

      <Stack>
        <CardStadistics userState={userState} />
        <CardLocation userState={userState} />
      </Stack>
    </>
  )
}