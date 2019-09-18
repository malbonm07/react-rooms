import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "50vh",
    position: "relative",
    backgroundColor: theme.palette.grey.main
  }
}));

export default function CenteredGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <CardMedia
                component="img"
                alt="Banner"
                width= "100%"
                height="100%"
                image="https://i.imgur.com/cKt9wL8.png"
                title="Hero"
                />
                <div style={banner}>
                    <Typography variant="body2" align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aperiam facilis ab laboriosam.</Typography>
                    {props.children}
                </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const banner = {
    width: "80%",
    height: "30vh",
    backgroundColor: "rgba(255,255,255,0.9)",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px"
}