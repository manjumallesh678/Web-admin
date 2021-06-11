import React from 'react';
import {Link} from 'react-router-dom';
import classes from './InformationBar.css';

const InformationBar = (props) =>{
    return (
        <Link className={classes.link} to={{
            pathname : '/kitchen/edit/'+ props.value.id,
            header : "edit",
            id : props.value.id
        }}>
            <div className={classes.bar}>
                <div className={classes.value}>{props.value.id}</div>
                <div className={classes.value}>{props.value.name}</div>
                <div className={classes.value}>{props.value.rate}</div>
                <div className={classes.value}>{props.value.email}</div>
                <div className={classes.value}>{props.value.number}</div>
                <div className={classes.value}>{props.value.price}</div>
            </div>
        </Link>


    );
}

export default InformationBar;