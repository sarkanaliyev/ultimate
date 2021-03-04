import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import karvansaray from "../Abideler/assets/Fuzuli/karvansaray/karvansaray.JPG";

import "./AbidelerGrid.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    width: "100%",
    // height: "180px",
    height: "11.71875vw",
    cursor: "pointer",
  },
}));

export default function AbidelerGrid(props) {
  const classes = useStyles();

  const arr = [
    {
      pic: props.images[0],
      name: props.names[0],
      route: props.routes[0],
    },
    {
      pic: props.images[1],
      name: props.names[1],
      route: props.routes[1],
    },
    {
      pic: props.images[2],
      name: props.names[2],
      route: props.routes[2],
    },
    {
      pic: props.images[3],
      name: props.names[3],
      route: props.routes[3],
    },
  ];
  function FormRow() {
    return (
      <React.Fragment>
        {arr.map((value) => (
          <Grid item xs={12} sm={6} md={3}>
            <a href={"/" + value.route}>
              <img src={value.pic} className={classes.paper} />
            </a>
            <p className="abide-ad">{value.name}</p>
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
