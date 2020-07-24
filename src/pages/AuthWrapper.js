import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingGif from '../images/preloader.gif'

function AuthWrapper({ children }) {
  const {
    isLoading,
    error,
  } = useAuth0();

  if (isLoading) {
    return (
    <div style={style.div}>
        <img src={LoadingGif} alt="loading" style={style.img}/>
    </div>
    )
  }
  if (error) {
    return (
    <div>Oops... {error.message}</div>
    )
  }
  return <>{children}</>;
}

export default AuthWrapper;

const style = {
    img : {
        width : '300px',
        height : "300px"
    },
    div : {
        display : 'flex',
        height : '100vh',
        justifyContent : 'center',
        alignItems : 'center'
    }
}