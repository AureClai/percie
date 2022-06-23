import React from 'react';

import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import { Toolbar, IconButton, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import BottomNavigation from '@mui/material/BottomNavigation';
import { TextField } from '@mui/material';

import AppCard from './AppCard';
import AlternatApp from './AlternatApp';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      importText: '',
      page: 'menu',
    };
  }

  handleChange = (event) => {
    this.setState({
      importText: event.target.value,
    });
  };

  changePage = (page) => {
    this.setState({
      page: page,
    });
  };

  render() {
    var content;
    if (this.state.page === 'menu') {
      content = (
        <div className="menu-app">
          <Typography variant="h4" style={{ marginTop: 20 }}>
            Démarrer une nouvelle configuration
          </Typography>
          <Grid container spacing={2} style={{ marginTop: 20}}>
            <Grid item>
            <div className='scenario-card' id="sc_alternart" onClick={(e) => this.changePage("alternat")}>
                <img className='scenario-img' src={require('./assets/ic_alternat.png')}></img>
                <Typography>
                  Alternat
                </Typography>
              </div>
            </Grid>
            <Grid item>
            <div className='scenario-card' id="sc_inter_3" onClick={(e) => this.changePage("alternat")}>
                <img className='scenario-img' src={require('./assets/ic_inter_3.png')}></img>
                <Typography>
                  Carrefour à feux
                </Typography>
                <Typography>
                  3 branches
                </Typography>
                <Typography>
                  2 phases
                </Typography>
              </div>
            </Grid>
            <Grid item>
            <div className='scenario-card' id="sc_inter_4">
                <img className='scenario-img' src={require('./assets/ic_inter_4.png')}></img>
                <Typography>
                  Carrefour à feux
                </Typography>
                <Typography>
                  4 branches
                </Typography>
                <Typography>
                  2 phases
                </Typography>
              </div>
            </Grid>
            <Grid item>
              <div className='scenario-card' id="sc_inter_4_tg">
                <img className='scenario-img' src={require('./assets/ic_inter_4_tg.png')}></img>
                <Typography>
                  Carrefour à feux
                </Typography>
                <Typography>
                  4 branches
                </Typography>
                <Typography>
                  2 phases + TAG
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Typography variant="h4" style={{ marginTop: 20 }}>
            Importer une configuration
          </Typography>
          <TextField
            id="outlined-multiline-flexible"
            label="Configuration"
            multiline
            rows={10}
            value={this.state.importText}
            onChange={this.handleChange}
            style={{ marginTop: 20, width: '100%', marginBottom: 20 }}
          />
          <Button variant="outlined">Valider</Button>
        </div>
      );
    }
    if (this.state.page === 'alternat') {
      content = (
        <AlternatApp
          L="200"
          J="3"
          V1="10"
          V2="10"
          Cy="70"
          Qs="1800"
          d1="1000"
          d2="1000"
        />
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <div className="app-content">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              id="navbar"
              position="static"
              style={{ backgroundColor: '#fff' }}
            >
              <Toolbar>
                {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              A
            </IconButton> */}
                <img
                  src={require('./assets/Logo RF Cerema horizontal.jpg')}
                  alt=""
                  height={80}
                />
                <Stack sx={{ flexGrow: 1, marginLeft: 2 }}>
                  <Typography variant="h6" component="div">
                    PERCIE
                  </Typography>
                  <Typography style={{ color: 'dimgrey' }} component="div">
                    Plateforme d'Évaluation de la Réserve de Capacité des
                    Intersections et des Échangeurs
                  </Typography>
                </Stack>
                <Typography style={{ color: 'dimgrey' }}>
                  Version alpha v.0.0.1
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>

          {content}

          {/* <div className="footer">
          <img
            src={require("./assets/Logo RF Cerema horizontal.jpg")}
            alt=""
            height={50}
          />
        </div> */}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
