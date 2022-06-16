import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
    gotohome: {
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        padding: 5,
        borderRadius: '2.5px',
        marginTop: "20px"
    },
    submitBtn: {
        backgroundColor: 'green',
        width: 150,
        color: 'white',
        border: 'none',
        padding: 10,
        borderRadius: '2.5px'
    }
}));

const AddUser = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const classes = useStyles();

    const [addNewUser, setAddNewUser] = useState({
        name: "",
        email: "",
        contact: "",
        adderss: ""
    });

    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddNewUser({ ...addNewUser, [name]: value })
    };

    const { name, email, contact, adderss } = addNewUser;

    const handleAddUserSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact || !adderss) {
            setError('Please input all input field')
        } else {
            dispatch(addUser(addNewUser));
            setError("")
            navigate("/")
        }
    }
    return (
        <div>
            <Link to="/">
                <button className={classes.gotohome}>
                    Go To Home
                </button>
            </Link>
            <h3>Add User Here</h3>
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
                <button className={classes.submitBtn}
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
};
export default AddUser;