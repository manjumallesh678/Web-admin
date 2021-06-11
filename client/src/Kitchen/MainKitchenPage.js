import { Button } from '@material-ui/core';
import React,{useEffect,useState} from 'react';
import classes from './MainKitchenPage.css';
import Searchbar from './SearchBar/SearchBar';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import InformationBars from './InfromationBars/InformationBars';

const MainKitchenPage = (props) =>{

    const [data,setData] = useState({});
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        Axios.get("http://localhost:3001/kitchen")
        .then((response) =>{
            //console.log(response);
            setData(response);
            setLoading(true);
        }).catch(err =>{
            console.error(err);
        })
    },[]);
    //console.log(data);
    return (
        loading ? 
        <>
        <h1 className={classes.header}>Menu > {props.value.location.header}</h1>
        <div className={classes.container}>
            <Searchbar/>
            <Link to={{
                pathname : "/kitchen/addkitchen",
                header : "AddKitchen"
                }}>
                <Button class={classes.button}>
                        <AddIcon style={{fontSize : 40}}/>
                </Button>
            </Link>
        </div>
        <InformationBars data={data}/>
        </>
        : <h1>Loading</h1>
    );
}

export default MainKitchenPage;