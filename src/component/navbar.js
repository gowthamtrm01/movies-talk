import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        padding: '10px'
    },
}));

const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{}}>
                <Typography variant="h6" className={classes.title}>
                    Movies Talk
                </Typography>
            </AppBar>
        </div >
    )
}

export default Navbar;