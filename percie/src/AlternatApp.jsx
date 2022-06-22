import React from "react";

import {
  Button,
  Stack,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Grid,
} from "@mui/material";

class AlternatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props, Ct: "", D: "", Rc: "", Lmax: "" };
  }

  calculer = () => {
    
    var d1 = parseFloat(this.state.d1);
    var d2 = parseFloat(this.state.d2);
    var L = parseFloat(this.state.L);
    var J = parseFloat(this.state.J);
    var V1 = parseFloat(this.state.V1);
    var V2 = parseFloat(this.state.V2);
    var Cy = parseFloat(this.state.Cy);
    var Qs = parseFloat(this.state.Qs);
    

    var D = d1 + d2;
    var Tn = 2 * J + L / V1 + L / V2;
    var Qt = (Qs * (Cy - Tn)) / Cy;
    var Rc = (100 * (Qt - D)) / Qt;
    var V = 1 / (1 / V1 + 1 / V2);
    var Lmax = Math.min(V * ((Qs - D) / Qs - 2 * J), V * (Cy - 12 - 2 * J));

    this.setState({
        Qt : Qt.toString(),
        D: D.toString(),
        Rc: Rc.toString(),
        Lmax: Lmax.toString()
    })
  };

  render() {
    return (
      <div className="calc-app">
        <Typography variant="h4" style={{ marginTop: 20 }}>
          Alternat
        </Typography>
        <img
          src={require("./assets/alternat.PNG")}
          alt="img"
          style={{ margin: "auto", width:"1500px" }}
        />
        <Grid container>
          <Grid item xs={4}>
            <FormGroup>
              <FormControlLabel
                control={
                  <TextField style={{ marginLeft: 20 }} value={this.state.d1} onChange={(event) => {this.setState({d1: event.target.value})}}/>
                }
                label="Demande de trafic sens 1"
                labelPlacement="start"
                style={{ marginTop: 20 }}
              />
              <FormControlLabel
                control={
                  <TextField style={{ marginLeft: 20 }} value={this.state.d2} onChange={(event) => {this.setState({d2: event.target.value})}}/>
                }
                label="Demande de trafic sens 2"
                labelPlacement="start"
                style={{ marginTop: 20 }}
              />
              <FormControlLabel
                control={
                  <TextField style={{ marginLeft: 20 }} value={this.state.L} onChange={(event) => {this.setState({L: event.target.value})}}/>
                }
                label="Longueur de l'alternat"
                labelPlacement="start"
                style={{ marginTop: 20 }}
              />
              <FormControlLabel
                control={
                  <TextField style={{ marginLeft: 20 }} value={this.state.J} onChange={(event) => {this.setState({J: event.target.value})}}/>
                }
                label="Durée de jaune des feux"
                labelPlacement="start"
                style={{ marginTop: 20 }}
              />
              <FormControlLabel
                control={
                  <TextField style={{ marginLeft: 20 }} value={this.state.V1} onChange={(event) => {this.setState({V1: event.target.value})}}/>
                }
                label="Vitesse de dégagement sens 1"
                labelPlacement="start"
                style={{ marginTop: 20 }}
              />
              <FormControlLabel
                control={
                  <TextField style={{ marginLeft: 20 }} value={this.state.V2} onChange={(event) => {this.setState({V2: event.target.value})}}/>
                }
                label="Vitesse de dégagement sens 2"
                labelPlacement="start"
                style={{ marginTop: 20 }}
              />
              <FormControlLabel
                control={
                  <TextField style={{ marginLeft: 20 }} value={this.state.Cy} onChange={(event) => {this.setState({Cy: event.target.value})}}/>
                }
                label="Durée du cycle"
                labelPlacement="start"
                style={{ marginTop: 20 }}
              />
              <FormControlLabel
                control={
                  <TextField style={{ marginLeft: 20 }} value={this.state.Qs} onChange={(event) => {this.setState({Qs: event.target.value})}}/>
                }
                label="Débit de saturation"
                labelPlacement="start"
                style={{ marginTop: 20 }}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => {
                this.calculer()
              }}
            >
              Calculer
            </Button>
          </Grid>
          <Grid item xs={4}>
            <FormGroup>
              <FormControlLabel
                control={<TextField style={{ marginLeft: 20 }} value={this.state.Qt} />}
                label="Capacité théorique"
                labelPlacement="start"
                style={{ marginTop: 20 }}
              />
              <FormControlLabel
                control={<TextField style={{ marginLeft: 20 }} value={this.state.D}/>}
                label="Demande globale de l'alternat"
                labelPlacement="start"
                style={{ marginTop: 20 }}
              />
              <FormControlLabel
                control={<TextField style={{ marginLeft: 20 }} value={this.state.Rc}/>}
                label="Réserve de capacité"
                labelPlacement="start"
                style={{ marginTop: 20 }}
              />
              <FormControlLabel
                control={<TextField style={{ marginLeft: 20 }} value={this.state.Lmax}/>}
                label="Longueur maximale possible de l'alternat"
                labelPlacement="start"
                style={{ marginTop: 20 }}
              />
            </FormGroup>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AlternatApp;
