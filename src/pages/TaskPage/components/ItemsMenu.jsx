import React from "react";
import { ListItemIcon,ListItem, ListItemText,List, Divider } from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MenuItem from "./MenuItem";
import green from '@material-ui/core/colors/green'
import {useDispatch, useSelector} from 'react-redux';

const styles = makeStyles(theme => ({
    addGroup:{
        backgroundColor: green[200],
        '&:hover':{
            backgroundColor: green[100]
        },
    },
}));

function ItemsMenu(props){
    const classes = styles();
    let {groups} = useSelector(groups=>groups);
    console.log(groups);
    // groupList.group.map(group=>{
    //     console.log("1");
    // });
    return(
        <h1>Hi</h1>
    )
}

export default ItemsMenu;