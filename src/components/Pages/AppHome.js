import React from 'react'
import { Link } from 'react-router-dom';

import AppHero from '../AppHero';
import AppServices from '../AppServices';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.onSecondary.main,
        marginTop: "1rem",
        padding: "5px 15px"
    }
  }));

export default function AppHome() {
    const classes = useStyles();
    return (
        <div className="App">
            <AppHero title="Luxurius Rooms" subtitle="Lorem ipsum lorem ipsum">
                <Link to="/rooms" style={{textDecoration: "none", color: "inherit"}}>
                    <Button onClick={(e) => console.log('home')} className={classes.button} size="medium">Rooms</Button>
                </Link>
            </AppHero>
            <AppServices></AppServices>
        </div>
    )
}

