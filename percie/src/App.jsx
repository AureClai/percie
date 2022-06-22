import React from "react";

import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Toolbar, IconButton, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import BottomNavigation from "@mui/material/BottomNavigation";
import { TextField } from "@mui/material";

import AppCard from "./AppCard";
import AlternatApp from "./AlternatApp";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      importText: "",
      page: "menu",
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
    if (this.state.page === "menu") {
      content = (
        <div className="menu-app">
          <Typography variant="h4" style={{ marginTop: 20 }}>
            Choisir un nouveau projet
          </Typography>
          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item>
              <AppCard
                image={require("./assets/alternat.PNG")}
                name="Alternat"
                id="alternat"
                onClick={() => {
                  this.changePage("alternat");
                }}
              />
            </Grid>
            <Grid item>
              <AppCard
                image={require("./assets/inter_3.PNG")}
                name="Carrefour à feux à 3 branches à 2 phases"
                id="card_inter_3"
              />
            </Grid>
            <Grid item>
              <AppCard
                image={require("./assets/inter_4.PNG")}
                name="Carrefour à feux à 4 branches à deux phases"
                id="card_inter_4"
              />
            </Grid>
            <Grid item>
              <AppCard
                image={require("./assets/inter_4_tg.PNG")}
                name=" Carrefours à feux à 4 branches à trois phases (phase spéciale TAG)"
                id="card_inter_tg"
              />
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
            style={{ marginTop: 20, width: "100%" }}
          />
        </div>
      );
    }
    if (this.state.page === 'alternat'){
        content =  <AlternatApp L="200" J="3" V1="10" V2="10" Cy="70" Qs="1800" d1="1000" d2="1000"/>
    }

    return (
      <div className="app-content">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ backgroundColor: "#F49D54" }}>
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
              <Stack sx={{ flexGrow: 1, marginLeft: 2 }}>
                <Typography variant="h4" component="div">
                  PERCIE
                </Typography>
                <Typography variant="h6" component="div">
                  Plateforme d'Évaluation de la Réserve de Capacité des
                  Intersections et des Échangeurs
                </Typography>
              </Stack>
              <Typography>Version alpha v.0.0.1</Typography>
            </Toolbar>
          </AppBar>
        </Box>

       {content}

        <div className="footer">
          <img
            src={require("./assets/Logo RF Cerema horizontal.jpg")}
            alt=""
            height={50}
          />
        </div>
      </div>
    );
  }
}

export default App;
