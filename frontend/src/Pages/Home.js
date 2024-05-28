// Home
import React from "react";
import { Button, ThemeProvider, createTheme } from '@mui/material';
import Rodape from '../Components/Rodape.jsx';

// Define o tema do Material-UI
const theme = createTheme();

function Home(){
  return (
    <ThemeProvider theme={theme}>
      <Button>Hello World</Button>
      <Rodape />
    </ThemeProvider>
  );
}

export default Home;