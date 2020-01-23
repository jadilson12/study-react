import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Template } from './modules/template';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Template />
      </Container>
    </React.Fragment>
  );
};
export default App;
