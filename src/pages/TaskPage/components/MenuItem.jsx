import React, { Fragment } from 'react';
import { Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

function MenuItem(props){
    const {name} = props;
    return(
        <Fragment>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentTurnedInIcon />
                </ListItemIcon>
                <ListItemText  primary={name}/>
            </ListItem>
            <Divider />
        </Fragment>
    )
}

export default MenuItem;