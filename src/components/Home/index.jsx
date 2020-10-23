import React from 'react';


import Header from '../shared/Header';

import { Button } from 'react-bootstrap';


const Home = () => {
  return (
    <>
      <Header title="My React App" />
      <Button href="/About" style={{backgroundColor: "black"}}>About Me</Button>
    </>
  );
}
 
export default Home;