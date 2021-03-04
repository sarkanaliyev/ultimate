import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Agdam from "../Rayonlar/assets/ragdam.jpg";
import Cebrayil from "../Rayonlar/assets/rcebrayil.jpg";
import Fuzuli from "../Rayonlar/assets/rfuzuli.jpg";
import Xocali from "../Rayonlar/assets/rxocali.jpg";

// import Background from "../assets/govher-aga.jpg";
import "./QalereyaGrid.css";
import { AiOutlineRight } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor:"red",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    width: "100%",
    // height: "180px",
  },
}));

export default function QalereyaGrid(props) {
  const classes = useStyles();

  function FormRow() {
     
    return (
      <React.Fragment>
        {props.images.map((value) => (
          <Grid item xs={12} sm={6} md={6}>
            <div
              className={classes.paper}
              className="nested-rayon"
              style={{
                backgroundImage: `linear-gradient(180deg, #000000 -112.64%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%),url(${value})`,
              }}
            ></div>
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
