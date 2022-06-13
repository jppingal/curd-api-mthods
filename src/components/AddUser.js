import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
}));

const AddUser = () => {
    const classes = useStyles();

    const [successfull, setSuccessfull] = useState(false)

    const [addNewUser, setAddNewUser] = useState({
        name: "",
        email: "",
        contact: "",
        adderss: ""
    })
    const [error, setError] = useState('');
    const { name, email, contact, adderss } = addNewUser
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddNewUser({ ...addNewUser, [name]: value })
    }

    const dispatch = useDispatch()
    const handleAddUserSubmit=(e) =>{
        e.preventDefault();
        if(!name || !email || !contact || !adderss){
            setError('Please input all input field')
        }else{
            dispatch(addUser(addNewUser));
            setError("")
            setSuccessfull(true)
            
        }
    }
    return (
        <div>
            <Link to="/">
                <button style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    padding: 5,
                    borderRadius: '2.5px',
                    marginTop: "20px"
                }}>
                    Go To Home
                </button>
            </Link>
            <h3>Add User Here</h3>
            {!! successfull=== true ?<h5 style={{color: "green"}}> Form Submited successfully please click on Go To Home</h5>: ""}
            {error && <h5 style={{color: "red"}}>{error} </h5>}
            <form
                className={classes.root}
                noValidate autoComplete="off"
                onSubmit={handleAddUserSubmit}
            >
                <TextField
                    id="standard-basic"
                    label="Name"
                    value={name}
                    name="name"
                    type="text"
                    onChange={handleInputChange}
                />
                <br />
                <TextField
                    id="standard-basic"
                    label="Email-Id"
                    value={email}
                    type="email"
                    name='email'
                    onChange={handleInputChange}
                />
                <br />
                <TextField
                    id="standard-basic"
                    label="Contact-No"
                    value={contact}
                    type="number"
                    name='contact'
                    onChange={handleInputChange}
                />
                <br />
                <TextField
                    id="standard-basic"
                    label="Adderss"
                    value={adderss}
                    type="text"
                    name='adderss'
                    onChange={handleInputChange}
                />
                <br />
                <button style={{
                    backgroundColor: 'green',
                    width: 150,
                    color: 'white',
                    border: 'none',
                    padding: 10,
                    borderRadius: '2.5px'
                }}
                    type="submit">
                    Submit
                </button>

            </form>
        </div>

    )
}
export default AddUser;