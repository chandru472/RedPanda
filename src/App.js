import React from 'react';
import Navbar from './NavBar/Navbar'
import Box from '@mui/material/Box';
import Main from './Main/Main';
import What from './Main/What';
import About from './About/About';
import OurServices from './Services/OurServices';
import Travel from './Travel/Travel';
import Packages from './Packages/Packages';
import Partners from './Partners/Partners';
import Footer from './Footer/Footer';



const App = () => {

  return (
    <Box>
      <What />
      <Navbar />
      <Main />
      <About />
      <OurServices />
      <Travel />
      <Packages />
      <Partners />
      <Footer />
    </Box>
  )
}

export default App