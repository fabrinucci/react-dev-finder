import { CardMedia } from '@mui/material'
import React from 'react'

export const CardImage = ({ userState }) => {

  const { 
    name,
    avatar_url,
  } = userState

  return (
    <CardMedia 
      sx={{
        borderRadius: '50%',
        maxWidth: {
          xs: '225px',
          sm: 'auto'
        },
        margin: '0 auto'
      }}
      image={avatar_url}
      alt={`User ${name}`}
      component='img'
      title={name}
    />
  )
}
