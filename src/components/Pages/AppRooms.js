import React from 'react'
import { Link } from 'react-router-dom';
import AppHero from '../AppHero';

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

export default function AppRooms() {
    const classes = useStyles();
    return (
        <div>
            <AppHero title="Best rooms for you" subtitle="Lorem ipsum lorem lorem">
                <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                    <Button onClick={e => console.log('Rooms')} className={classes.button} size="medium">Back Home</Button>
                </Link>
            </AppHero>
        </div>
    )
}
