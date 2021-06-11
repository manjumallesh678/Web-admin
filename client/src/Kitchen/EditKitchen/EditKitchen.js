import React,{useState,useEffect} from 'react';
import Edit from '../Edit/Edit';
import Axios from 'axios';

const EditKitchen = (props) =>{

    const [currentdata,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    let routeId = props.value.location.id;
    //function Request(routeId){
        useEffect(()=>{
            const fetchProducts = async () => {
                Axios.post(`http://localhost:3001/kitchen/edit/${routeId}`,{
                userID : routeId,
                })
                .then((response) =>{
                    //console.log(response.data[0]);
                    setData(response);
                    setLoading(true);
                }).catch(err =>{
                    console.error(err);
                })
            }
            fetchProducts()
        },[routeId]);
        
        return(
           loading ? <Edit value={currentdata}/> : <h1>Loading..</h1>
        );
};


export default EditKitchen;