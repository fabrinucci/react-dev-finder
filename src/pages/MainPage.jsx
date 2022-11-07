import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Searcher } from '../components';
import { getGitHubUser } from '../services/users';
import { UserCard } from '../containers/UserCard';


export const MainPage = () => {

  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState(inputUser);

  const getDataUser = async (user) => {
    const userResponse = await getGitHubUser(user);

    if( userState === 'octocat' ) {
      localStorage.setItem('octocat', JSON.stringify(userResponse));
    }

    if(userResponse.message === 'Not Found') {
      const octocat = JSON.parse(localStorage.getItem('octocat'));
      setUserState(octocat)
    } else {
      setUserState(userResponse)
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
        <>
          <Searcher setInputUser={setInputUser}/>
          <UserCard userState={userState}/>
        </>

    </Container>
  )
}