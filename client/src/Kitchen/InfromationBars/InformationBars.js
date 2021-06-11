import React from 'react';
//import classes from './InformationBars.css';
import InformationBar from '../InformationBar/InformationBar';

const InformationBars = (props) =>{
    

    const details = props.data.data || {};
    //console.log(details);
    var arr = [];
    if(details !== null){
        Object.keys(details).forEach(function(key){
            arr.push(details[key]);
        });
    }
    //console.log(arr);

    //arr.map(item => console.log(item));
    //const allList = Object.keys(details).map(key => <InformationBar value={key}/>);
    return(
        <div>{arr.map(item => <InformationBar key={item.id} value={item}/>)}</div>
    );
}

export default InformationBars;