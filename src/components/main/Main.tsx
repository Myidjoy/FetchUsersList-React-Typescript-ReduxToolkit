import React from 'react'
import Login from '../authorisation/login/Login';
import './Main.css'
// import Header from '../header/Header'
// type Props = {};

const Main = (): JSX.Element => {
  return (
    <>
      {/* <Header/> */}
      <main className='main'>
        <Login/>
      </main>
    </>
    
  )
}

export default Main;