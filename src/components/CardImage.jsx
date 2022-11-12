import React, { useContext } from 'react';
import { CardMedia } from '@mui/material';
import { AppContext } from '../context';

export const CardImage = () => {

  const { userState } = useContext(AppContext);

  const { 
    name,
    avatar_url,
  } = userState;
 

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
