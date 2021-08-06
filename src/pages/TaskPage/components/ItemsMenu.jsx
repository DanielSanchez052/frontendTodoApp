import React from "react";
import { ListItemIcon,ListItem, ListItemText,List, Divider } from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MenuItem from "./MenuItem";
import green from '@material-ui/core/colors/green'

const styles = makeStyles(theme => ({
    addGroup:{
        backgroundColor: green[200],
        '&:hover':{
            backgroundColor: green[100]
        },
    },
}));

function ItemsMenu(){
    const classes = styles();
    return(
        <List component='nav'>
            <ListItem 
                className={classes.addGroup}
                button>
                <ListItemIcon>
                    <AddCircleIcon />
                </ListItemIcon>
                <ListItemText  primary="Agregar Grupo"/>
            </ListItem>
            <Divider />
            
            <MenuItem name='Primero' />
            <MenuItem name='Segundo' />
        </List>
    )
}

export default ItemsMenu;