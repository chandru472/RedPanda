import React from 'react';
import Navbar from './NavBar/Navbar'
import Box from '@mui/material/Box';
import Main from './Main/Main';
import What from './Main/What';
import About from './About/About';
import OurServices  from './Services/OurServices';
import Travel from './Travel/Travel';



const App = () => {

  return (
    <Box>
      <What />
      <Navbar />
      <Main />
      <About />
      <OurServices />
      <Travel/>
    </Box>
  )
}

export default App