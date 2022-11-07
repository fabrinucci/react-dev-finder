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
        justifyContent='space-around'
        margin='20px 0'
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
        }}
      >
        <Stack spacing={1} alignItems='center'>
          <Typography variant='h6'>Repositories</Typography>
          <Typography variant='h6'>{public_repos}</Typography>
        </Stack>
        <Stack spacing={1} alignItems='center'>
          <Typography variant='h6'>Followers</Typography>
          <Typography variant='h6'>{followers}</Typography>
        </Stack>
        <Stack spacing={1} alignItems='center'>
          <Typography variant='h6'>Following</Typography>
          <Typography variant='h6'>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}
