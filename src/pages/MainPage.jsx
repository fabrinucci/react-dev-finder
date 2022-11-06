import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Searcher } from '../components';
import { getGitHubUser } from '../services/users';
import { UserCard } from '../containers/UserCard';


export const MainPage = () => {

  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState(inputUser);
  const [notFound, setNotFound] = useState(false);

  const getDataUser = async (user) => {
    try {
      const userResponse = await getGitHubUser(user);
      setUserState(userResponse)
      console.log(userResponse);
      
    } catch (error) {
      console.log(error);
      setNotFound(true);
    }
  }
  
  useEffect(() => {
    getDataUser(inputUser);
  }, [inputUser])

  return (
    <Container sx={{
      backgroundColor: '#fefcbf',
      marginTop: '50px',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {
        notFound 
        ? <>
            <h2>No se encuentra el usuario</h2>
          </>
        : <>
            <Searcher setInputUser={setInputUser}/>
            <UserCard userState={userState}/>
          </>
      }

    </Container>
  )
}
