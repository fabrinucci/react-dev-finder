import { Paper, Stack, Typography } from '@mui/material';

export const CardStadistics = ({ userState }) => {

  const { 
    public_repos,
    followers,
    following,
  } = userState

  return (
    <Paper elevation={3}>
      <Stack 
        direction='row' 
        justifyContent='space-around'
        margin='20px 0'
      >
        <Stack spacing={1} alignItems='center'>
          <Typography variant='h5'>Repositories</Typography>
          <Typography variant='h6'>{public_repos}</Typography>
        </Stack>
        <Stack spacing={1} alignItems='center'>
          <Typography variant='h5'>Followers</Typography>
          <Typography variant='h6'>{followers}</Typography>
        </Stack>
        <Stack spacing={1} alignItems='center'>
          <Typography variant='h5'>Following</Typography>
          <Typography variant='h6'>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}
