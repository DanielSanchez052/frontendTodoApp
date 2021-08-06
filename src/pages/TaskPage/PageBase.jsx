import React from 'react';

import {
    CssBaseline,
    Hidden,
    makeStyles
} from '@material-ui/core'

//import theme from '../themeConfig'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Tasks from './components/Tasks/Tasks'

const styles = makeStyles(theme=>({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
    },
}));
function PageBase(){
    const classes = styles();
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleOpenDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar openDrawer={handleOpenDrawer}/>
            <Hidden mdDown> 
                <SideBar 
                    variant="permanent"
                    open={true}
                /> 
            </Hidden>
            <Hidden lgUp> 

                <SideBar 
                    variant="temporary"
                    open={drawerOpen}
                    onClose={handleOpenDrawer}
                /> 
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}/>
                <Tasks />
            </div>
        </div>
    );
}

export default PageBase;