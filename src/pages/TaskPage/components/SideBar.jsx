import { Drawer, makeStyles, Toolbar } from "@material-ui/core";

import React from "react";
import { Fragment } from "react";
//import theme from "../themeConfig";
import ItemsMenu from "./ItemsMenu";

const styles = makeStyles((theme)=>({
    drawer:{
        width: 240,
        flexShrink: 0,
    },
    drawerPaper:{
        width: 240,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    toolbar: theme.mixins.toolbar,
}));

function SideBar(props){

    const classes = styles();
    return (
        <Fragment>
            <Drawer
                className={classes.drawer}
                variant={props.variant}
                classes={{
                    paper:classes.drawerPaper,
                }}
                anchor='left'
                open={props.open}
                onClose={props.onClose ? props.onClose : null } 
            >
                {props.onClose ? 
                    null
                    :<Toolbar /> 
                }
                

                <div className={classes.drawerContainer}>
                    <ItemsMenu />
                </div>
            </Drawer>
        </Fragment>
    )
}

export default SideBar;