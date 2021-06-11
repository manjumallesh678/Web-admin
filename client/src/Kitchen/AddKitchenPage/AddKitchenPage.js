import React,{useState} from 'react';
import classes from './AddKitchenPage.css';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const AddKitchenPage = (props) =>{

    
    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [rate,setRate] = useState(0);
    const [email,setEmail] = useState("");
    const [price,setPrice] = useState(0);
    const [number,setNumber] = useState("");

    const [breakFastOpenTime,setBreakFastOpenTime] = useState("");
    const [lunchOpenTime,setLunchOpenTime] = useState("");
    const [highTeaOpenTime,setHighTeaOpenTime] = useState("");
    const [dinnerOpenTime,setDinnerOpenTime] = useState("");

    const [breakFastCLoseTime,setBreakFastCloseTime] = useState("");
    const [lunchCloseTime,setLunchCloseTime] = useState("");
    const [highTeaCloseTime,setHighTeaCloseTime] = useState("");
    const [dinnerCloseTime,setDinnerCloseTime] = useState("");



    const [state,setState] = useState({
        northEastern : false,
        bengali : false,
        kashmiri : false,
        southIndian : false,
        punjabi : false,
        maharashtrian : false,
        bihari : false,
        gujurati : false,
        rajasthani : false
    });

    //console.log(state);
    //console.log(props.value);
    const handleChange = (e) =>{
        setState({...state,[e.target.name] : e.target.checked});
    };

    const addTodatabase = () =>{
        Axios.post("http://localhost:3001/addkitchen",{
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
            <h2 className={classes.header}>Menu > Kitchen > {props.value.location.header}</h2>
            <div className={classes.details}>
                <form className={classes.form}>
                    <input className={classes.input} placeholder="id.." 
                    onChange={(e)=> setId(e.target.value)}/>
                    <input className={classes.input} placeholder="name.." 
                    onChange={(e)=> setName(e.target.value)}/>
                    <input className={classes.input} placeholder="rate.." 
                    onChange={(e)=> setRate(e.target.value)}/>
                    <input className={classes.input} placeholder="email.." 
                    onChange={(e)=> setEmail(e.target.value)}/>
                    <input className={classes.input} placeholder="price.." 
                    onChange={(e)=> setPrice(e.target.value)}/>
                    <input className={classes.input} placeholder="number.." 
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
                    <input className={classes.hourInput} placeholder="10.00 AM"
                    onChange={(e) => setBreakFastOpenTime(e.target.value)}/>
                    <input className={classes.hourInput} placeholder="12.00 PM"
                    onChange={(e) => setLunchOpenTime(e.target.value)}/>
                    <input className={classes.hourInput} placeholder="3.30 AM"
                    onChange={(e) => setHighTeaOpenTime(e.target.value)}/>
                    <input className={classes.hourInput} placeholder="6.30 AM"
                    onChange={(e) => setDinnerOpenTime(e.target.value)}/>
                </div>
                <div className={classes.orderFrom}>
                    <div className={classes.name}>Order To</div>
                    <input className={classes.hourInput} placeholder="12.00 AM"
                    onChange={(e) => setBreakFastCloseTime(e.target.value)}/>    
                    <input className={classes.hourInput} placeholder="3.30 PM"
                    onChange={(e) => setLunchCloseTime(e.target.value)}/>
                    <input className={classes.hourInput} placeholder="6.30 AM"
                    onChange={(e) => setHighTeaCloseTime(e.target.value)}/>
                    <input className={classes.hourInput} placeholder="11.30 AM"
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

export default AddKitchenPage;