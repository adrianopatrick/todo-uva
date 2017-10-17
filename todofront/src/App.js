import React, { Component } from 'react';
import './css/estilo.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Topo from './todo/topo';
import Navegacao from './todo/navegacao';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Topo />
          <Navegacao />
        </div>
      </MuiThemeProvider>
    );
  }

  componentWillMount() {

  }

}

export default App;
