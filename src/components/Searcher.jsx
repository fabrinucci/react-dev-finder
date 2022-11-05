import { useState } from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Searcher = (props) => {
  const { setInputUser } = props;

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    setInputUser(inputValue);
  }

  return (
    <Stack direction='row' sx={{
      width: '80%'
    }}>
      <TextField 
        value={ inputValue }
        onChange={ onInputChange }
        id="outlined-basic" 
        label="GitHub user" 
        variant="outlined"
        placeholder='Octocat'
        size='small'
        sx={{
          width: '90%'
      }}/>
      <IconButton 
        onClick={ handleSubmit }
        size='small' 
        sx={{left: '-45px'}}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}
