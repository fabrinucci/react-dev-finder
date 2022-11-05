import { CardContent, Typography } from '@mui/material'
import React from 'react'

export const CardInfo = ({ userState }) => {

  const { 
    name,
    login: username,
    created_at
  } = userState

  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">{name}</Typography>
      <Typography variant="body2">Creation Date: {created_at}</Typography>
      <Typography variant='body2'>Username: {username}</Typography>
  </CardContent>
  )
}
