import React, { Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import {types} from '../../../types/types';

function MenuItem(props){
    const {item} = props;
    const dispatch = useDispatch();

    return(
        <div onClick={()=>dispatch(groupActive(item.id))}>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentTurnedInIcon />
                </ListItemIcon>
                <ListItemText  primary={item.name}/>
            </ListItem>
            <Divider />
        </div>
    )
}

const groupActive = (groupId)=>({
    type: types.groupActive,
    payload: groupId
});


export default MenuItem;