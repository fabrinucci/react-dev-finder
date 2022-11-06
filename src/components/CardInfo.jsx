import { CardContent, Stack, Typography } from '@mui/material'
import React from 'react'

export const CardInfo = ({ userState }) => {

  const { 
    name,
    login: username,
    created_at
  } = userState

  return (
    <CardContent>
      <Typography gutterBottom variant="h4" component="div">{name}</Typography>
      <Stack spacing={1}>
        <Stack direction='row' spacing={1} alignItems='center'>
          <Typography variant='h6'>Username:</Typography>
          <Typography variant='body1'>{username}</Typography>
        </Stack>
        <Stack direction='row' spacing={1} alignItems='center'>
          <Typography variant='h6'>Creation Date:</Typography>
          <Typography variant='body1'>{created_at}</Typography>
        </Stack>
      </Stack>
  </CardContent>
  )
}
