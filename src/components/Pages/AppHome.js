import React from 'react'

import AppHero from '../Hero';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: theme.palette.secondary.main,
        marginTop: "1rem"
    }
  }));

export default function AppHome() {
    const classes = useStyles();
    return (
        <div className="App">
            <AppHero>
                <Button onClick={(e) => console.log('home')} className={classes.button} size="large">Rooms</Button>
            </AppHero>
        </div>
    )
}

