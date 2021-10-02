import React,{Fragment} from 'react'
import {
    CssBaseline,
    Hidden,
    makeStyles
} from '@material-ui/core'
import NavBar from '../../components/Navbar';
import SideBar from '../../components/Sidebar';
import Tasks from '../../components/Tasks'

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

function index() {
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
    )
}

export default index
