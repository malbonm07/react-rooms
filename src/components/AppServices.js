import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
// import Icon from '@material-ui/core/Icon';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin: "2rem 0rem",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
  }));

export default function AppServices() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Paper square className={classes.paper} style={{padding: "50px 0px"}}>
                        <Typography variant="h6">
                            SERVICES
                        </Typography>
                    </Paper>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={3}>
                    <Paper square className={classes.paper}>
                        <LocalBarIcon fontSize="large"></LocalBarIcon>
                        <Typography variant="h6" style={{fontWeight: "600", margin: "15px 0px"}}>Free Cocktails</Typography>
                        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam.</Typography>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Paper square className={classes.paper}>
                        <DirectionsWalkIcon fontSize="large"></DirectionsWalkIcon>
                        <Typography variant="h6" style={{fontWeight: "600", margin: "15px 0px"}}>Endless Hiking</Typography>
                        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam.</Typography>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Paper square className={classes.paper}>
                        <DirectionsBusIcon fontSize="large"></DirectionsBusIcon>
                        <Typography variant="h6" style={{fontWeight: "600", margin: "15px 0px"}}>Free Shuttle</Typography>
                        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam.</Typography>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Paper square className={classes.paper}>
                        <LocalCafeIcon fontSize="large"></LocalCafeIcon>
                        <Typography variant="h6" style={{fontWeight: "600", margin: "15px 0px"}}>Strongest Beer</Typography>
                        <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam.</Typography>
                    </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

