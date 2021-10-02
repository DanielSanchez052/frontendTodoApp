import React, {Fragment} from 'react'
import { AppBar, makeStyles, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";

const styles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer+1,
    },
}));

function index(props) {
    const classes = styles();
    return (
        <Fragment>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu"
                        onClick={props.openDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' noWrap>
                        Task Manager
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default index
