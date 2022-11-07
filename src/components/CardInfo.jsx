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
      <Typography gutterBottom 
        component='div'
        variant= 'h4'
        sx={{
          textAlign: {
            xs: 'center',
            sm: 'left'
          }
        }}
      >
        {name}
      </Typography>
      <Stack 
        justifyContent='space-between' 
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          textAlign: {
            xs: 'center',
            sm: 'left'
          },
        }}
      >
        <Typography variant='body2'>@{username}</Typography>
        <Typography variant='body2' sx={{
          marginTop: {
            xs: '10px',
            sm: 0
          }
        }}>{created_at}</Typography>
      </Stack>
  </CardContent>
  )
}
