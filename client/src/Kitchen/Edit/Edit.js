import React,{useState} from 'react';
import classes from './Edit.css';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const Edit = (props) =>{
    //console.log("hi");
    //console.log(props.value.data);
    let data = props.value.data[0];
    //console.log(data);
    /*let currentId = 0;
    let currentName = "";
    let currentRate = "";
    let currentEmail = "";
    let currentPrice = "";
    let currentNumber = 0;
    let currentBreakFastOpenTime = "";
    let currentLunchOpenTime = "";
    let currentHighTeaOpenTime = "";
    let currentDinnerOpenTime = "";
    let currentBreakFastCloseTime = "";
    let currentHighTeaCloseTime = "";
    let currentLunchCloseTime = "";
    let currentDinnerCloseTime = "";
    let currentNorthEastern = false;
    let currentBengali = false;
    let currentKashmiri = false;
    let currentSouthIndian = false;
    let currentPunjabi = false;
    let currentMaharashtrian = false;
    let currentBihari = false;
    let currentGujurati = false;
    let currentRajasthani = false;
    */

    /**
     *      currentEmail = data.data.email;
            currentId = data.data.id;
            currentNumber = data.data.number;
            currentPrice = data.data.price;
            currentRate = data.data.rate;
            currentName = data.data.name;
            
            currentBreakFastOpenTime = data.data.time.breakFast.orderFrom;
            currentDinnerOpenTime = data.data.time.dinner.orderFrom;
            currentHighTeaOpenTime = data.data.time.highTea.orderFrom;
            currentLunchOpenTime = data.data.time.lunch.orderFrom;

            currentBreakFastCloseTime = data.data.time.breakFast.orderTo;
            currentDinnerCloseTime = data.data.time.dinner.orderTo;
            currentHighTeaCloseTime = data.data.time.highTea.orderTo;
            currentLunchCloseTime = data.data.time.lunch.orderTo;

            currentNorthEastern = data.data.type.northEastern;
            currentBihari = data.data.type.bihari;
            currentGujurati = data.data.type.gujurati;
            currentKashmiri = data.data.type.kashmiri;
            currentMaharashtrian = data.data.type.maharashtrian;
            currentBengali = data.data.type.bengali;
            currentPunjabi = data.data.type.punjabi;
            currentRajasthani = data.data.type.rajasthani;
            currentSouthIndian = data.data.type.southIndian;
     */
       // }
   //console.log(currentdata.data[0]);
    //console.log(data.data.email);

   /* if(props.value.location.header === 'edit'){
        
       Request(routeId);
        console.log("edit server request",routeId);

            currentEmail = data.data[0].email;
            currentId = data.data[0].id;
            currentNumber = data.data[0].number;
            currentPrice = data.data[0].price;
            currentRate = data.data[0].rate;
            currentName = data.data[0].name;
            
            currentBreakFastOpenTime = data.data[0].time.breakFast.orderFrom;
            currentDinnerOpenTime = data.data[0].time.dinner.orderFrom;
            currentHighTeaOpenTime = data.data[0].time.highTea.orderFrom;
            currentLunchOpenTime = data.data[0].time.lunch.orderFrom;

            currentBreakFastCloseTime = data.data[0].time.breakFast.orderTo;
            currentDinnerCloseTime = data.data[0].time.dinner.orderTo;
            currentHighTeaCloseTime = data.data[0].time.highTea.orderTo;
            currentLunchCloseTime = data.data[0].time.lunch.orderTo;

            currentNorthEastern = data.data[0].type.northEastern;
            currentBihari = data.data[0].type.bihari;
            currentGujurati = data.data[0].type.gujurati;
            currentKashmiri = data.data[0].type.kashmiri;
            currentMaharashtrian = data[0].data.type.maharashtrian;
            currentBengali = data.data[0].type.bengali;
            currentPunjabi = data.data[0].type.punjabi;
            currentRajasthani = data.data[0].type.rajasthani;
            currentSouthIndian = data.data[0].type.southIndian;
    }
    */
    const [id,setId] = useState(data.id);
    const [name,setName] = useState(data.name);
    const [rate,setRate] = useState(data.rate);
    const [email,setEmail] = useState(data.email);
    const [price,setPrice] = useState(data.price);
    const [number,setNumber] = useState(data.number);

    const [breakFastOpenTime,setBreakFastOpenTime] = useState(data.time.breakFast.orderFrom);
    const [lunchOpenTime,setLunchOpenTime] = useState(data.time.lunch.orderFrom);
    const [highTeaOpenTime,setHighTeaOpenTime] = useState(data.time.highTea.orderFrom);
    const [dinnerOpenTime,setDinnerOpenTime] = useState(data.time.dinner.orderFrom);

    const [breakFastCLoseTime,setBreakFastCloseTime] = useState(data.time.breakFast.orderTo);
    const [lunchCloseTime,setLunchCloseTime] = useState(data.time.breakFast.orderTo);
    const [highTeaCloseTime,setHighTeaCloseTime] = useState(data.time.breakFast.orderTo);
    const [dinnerCloseTime,setDinnerCloseTime] = useState(data.time.breakFast.orderTo);



    const [state,setState] = useState({
        northEastern : data.type.northEastern,
        bengali : data.type.bengali,
        kashmiri : data.type.kashmiri,
        southIndian : data.type.southIndian,
        punjabi : data.type.punjabi,
        maharashtrian : data.type.maharashtrian,
        bihari : data.type.bihari,
        gujurati : data.type.gujurati,
        rajasthani : data.type.rajasthani
    });

    //console.log(state);
    //console.log(props.value);
    const handleChange = (e) =>{
        setState({...state,[e.target.name] : e.target.checked});
    };

    const addTodatabase = () =>{
        Axios.post("http://localhost:3001/updatekitchen",{
            id : id,
            name : name,
            rate : rate,
            email : email,
            number : number,
            price : price,
            type : {
                northEastern : state.northEastern,
                bengali : state.bengali,
                kashmiri : state.kashmiri,
                southIndian : state.southIndian,
                punjabi : state.punjabi,
                maharashtrian : state.maharashtrian,
                bihari : state.bihari,
                gujurati : state.gujurati,
                rajasthani : state.rajasthani
            },
            time : {
                    breakFast : {
                    orderFrom : breakFastOpenTime,
                    orderTo : breakFastCLoseTime
                },
                lunch : {
                    orderFrom : lunchOpenTime,
                    orderTo : lunchCloseTime
                },
                highTea : {
                    orderFrom : highTeaOpenTime,
                    orderTo : highTeaCloseTime
                },
                dinner : {
                    orderFrom : dinnerOpenTime,
                    orderTo : dinnerCloseTime
                }
            }
        });
    };
    return (
        <div className={classes.container}>
            <h2 className={classes.header}>Menu > Kitchen ></h2>
            <div className={classes.details}>
                <form className={classes.form}>
                    <input className={classes.input} value={data.id}
                    placeholder="id.."
                    onChange={(e)=> setId(e.target.value)}/>
                    <input className={classes.input} placeholder={data.name} 
                    onChange={(e)=> setName(e.target.value)}/>
                    <input className={classes.input} placeholder={data.rate} 
                    onChange={(e)=> setRate(e.target.value)}/>
                    <input className={classes.input} placeholder={data.email} 
                    onChange={(e)=> setEmail(e.target.value)}/>
                    <input className={classes.input} placeholder={data.price} 
                    onChange={(e)=> setPrice(e.target.value)}/>
                    <input className={classes.input} placeholder={data.number} 
                    onChange={(e)=> setNumber(e.target.value)}/>
                </form>
            </div>
            <div className={classes.types}>
                <FormGroup row>
                    <div className={classes.check}>
                        <FormControlLabel 
                            control={
                            <Checkbox
                                checked={state.northEastern}
                                onChange={handleChange}
                                name="northEastern"
                                color="primary"
                            />
                            }
                            label="NorthEastern"
                        />
                    </div>
                    <div className={classes.check}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.bengali}
                                onChange={handleChange}
                                name="bengali"
                                color="primary"
                            />
                            }
                            label="Bengali"
                        />
                    </div>
                    <div className={classes.check}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.kashmiri}
                                onChange={handleChange}
                                name="kashmiri"
                                color="primary"
                            />
                            }
                            label="Kashmiri"
                        />
                    </div>
                    <div className={classes.check}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.southIndian}
                                onChange={handleChange}
                                name="southIndian"
                                color="primary"
                            />
                            }
                            label="SouthIndian"
                        />
                    </div>
                    <div className={classes.check}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.punjabi}
                                onChange={handleChange}
                                name="punjabi"
                                color="primary"
                            />
                            }
                            label="Punjabi"
                        />
                    </div>
                    <div className={classes.check}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.maharashtrian}
                                onChange={handleChange}
                                name="maharashtrian"
                                color="primary"
                            />
                            }
                            label="Maharashtrian"
                        />
                    </div>
                    <div className={classes.check}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.bihari}
                                onChange={handleChange}
                                name="bihari"
                                color="primary"
                            />
                            }
                            label="Bihari"
                        />
                    </div>
                    <div className={classes.check}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.gujurati}
                                onChange={handleChange}
                                name="gujurati"
                                color="primary"
                            />
                            }
                            label="Gujurati"
                        />
                    </div>
                    <div className={classes.check}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.rajasthani}
                                onChange={handleChange}
                                name="rajasthani"
                                color="primary"
                            />
                            }
                            label="Rajasthani"
                        />
                    </div>
                </FormGroup>
            </div>
            <div className={classes.label}>
                <div className={classes.labelName}>BreakFast</div>
                <div className={classes.labelName}>Lunch</div>
                <div className={classes.labelName}>HighTea</div>
                <div className={classes.labelName}>Dinner</div>
            </div>
            <div className={classes.hour}>
                <div className={classes.orderFrom}>
                    <div className={classes.name}>Order From</div>
                    <input className={classes.hourInput} placeholder={data.time.breakFast.orderFrom}
                    onChange={(e) => setBreakFastOpenTime(e.target.value)}/>
                    <input className={classes.hourInput} placeholder={data.time.lunch.orderFrom}
                    onChange={(e) => setLunchOpenTime(e.target.value)}/>
                    <input className={classes.hourInput} placeholder={data.time.highTea.orderFrom}
                    onChange={(e) => setHighTeaOpenTime(e.target.value)}/>
                    <input className={classes.hourInput} placeholder={data.time.dinner.orderFrom}
                    onChange={(e) => setDinnerOpenTime(e.target.value)}/>
                </div>
                <div className={classes.orderFrom}>
                    <div className={classes.name}>Order To</div>
                    <input className={classes.hourInput} placeholder={data.time.breakFast.orderTo}
                    onChange={(e) => setBreakFastCloseTime(e.target.value)}/>    
                    <input className={classes.hourInput} placeholder={data.time.lunch.orderTo}
                    onChange={(e) => setLunchCloseTime(e.target.value)}/>
                    <input className={classes.hourInput} placeholder={data.time.highTea.orderTo}
                    onChange={(e) => setHighTeaCloseTime(e.target.value)}/>
                    <input className={classes.hourInput} placeholder={data.time.dinner.orderTo}
                    onChange={(e) => setDinnerCloseTime(e.target.value)}/>
                </div>
            </div>
            <div className={classes.buttons}>
                <Link to="/kitchen">
                    <button className={classes.saveButton} onClick={addTodatabase}>Save</button>
                </Link>
                <Link to="/kitchen">
                    <button className={classes.cancelButton}>Cancel</button>
                </Link>
            </div>
        </div>
    );
    
};


export default Edit;