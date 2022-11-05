import { Stack, Typography } from "@mui/material";
import { CardLocation } from "./CardLocation";
import { CardStadistics } from "./CardStadistics";

export const CardDescription = ({ userState }) => {
  const { bio } = userState;

  return (
    <>
      <Stack>
        { bio !== null 
          ? <Typography variant='body2'>Description: {bio}</Typography>
          : <Typography variant='body2'>Description: This user has not a description, what a boring man</Typography>
        }
      </Stack>
      {/* <CardStadistics userState={userState} /> */}
      <CardLocation userState={userState} />
    </>
  )
}