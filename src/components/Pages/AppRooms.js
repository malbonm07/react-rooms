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

export default function AppRooms() {
    const classes = useStyles();
    return (
        <div>
            <AppHero>
                <Button onClick={e => console.log('Rooms')} className={classes.button} size="large">Back Home</Button>
            </AppHero>
        </div>
    )
}
