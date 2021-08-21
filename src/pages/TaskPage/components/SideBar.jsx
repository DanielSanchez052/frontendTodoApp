import { Drawer, makeStyles, Toolbar } from "@material-ui/core";

import React from "react";
import { Fragment } from "react";
//import theme from "../themeConfig";
import { ListItemIcon,ListItem, ListItemText,List, Divider } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import ItemsMenu from "./ItemsMenu";
import { loadGroups } from '../../../helpers/loadGroups';
import {useDispatch, useSelector} from 'react-redux';
import {types} from '../../../types/types';
import green from '@material-ui/core/colors/green'
import MenuItem from "./MenuItem";

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
    addGroup:{
        backgroundColor: green[200],
        '&:hover':{
            backgroundColor: green[100]
        },
    },
}));

function SideBar(props){
    const classes = styles();
    const dispatch = useDispatch();
    const groupList=[];

    React.useEffect(()=>{
        async function loadedGroups(){
            const groups = await loadGroups();
            await dispatch(eventLoaded(groups));
        }
        loadedGroups();
    },[dispatch]);

    const groups= useSelector(state=>state.group.groups);
    
    for(const group in groups){ 
        groupList.push(groups[group]); 
    }
    
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
                onClose={props.onClose ? props.onClose : null } >
                {props.onClose ? null : <Toolbar /> }

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
                    { groupList.map(group => 
                        <MenuItem key={group.id} item={group}/>
                    ) }
                </List>
            </Drawer>
        </Fragment>
    )
}

const eventLoaded = (groups)=>({
    type: types.eventLoaded,
    payload: groups
});

export default SideBar;