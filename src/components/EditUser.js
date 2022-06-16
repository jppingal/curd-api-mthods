import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getEditableUser, updateUser } from '../redux/action';

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

const EditUser = () => {
    const navigate = useNavigate()

    const classes = useStyles();
    const { id } = useParams();

    const { user } = useSelector((state) => state.data);

    const [hide, setHide] = useState(true);

    const [addUpdatedUser, setAddUpdatedUser] = useState({
        name: "",
        email: "",
        contact: "",
        adderss: ""
    })
    const [error, setError] = useState('');
    const { name, email, contact, adderss } = addUpdatedUser
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddUpdatedUser({ ...addUpdatedUser, [name]: value })
    }

    const dispatch = useDispatch()
    const handleUpdateUserSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact || !adderss) {
            setError('Please input all input field')
        } else {
            dispatch(updateUser(addUpdatedUser, id));
            setError("")
            navigate("/")
        }
    }

    //for this useEffect use for defaultValue in edit form 
    //when click on edit button in table
    useEffect(() => {
        setAddUpdatedUser({ ...user })
    }, [user])


    useEffect(() => {
        dispatch(getEditableUser(id))
    }, [])

    return (
        <div>
            <Link to="/">
                <button className={classes.gotohome}>
                    Go To Home
                </button>
            </Link>
            <h3>Edit User Here</h3>
            <form
                className={classes.root}
                noValidate autoComplete="off"
                onSubmit={handleUpdateUserSubmit}
            >
                <TextField
                    id="standard-basic"
                    label="Name"
                    value={name || ""}
                    name="name"
                    type="text"
                    onChange={handleInputChange}
                />
                <br />
                <TextField
                    id="standard-basic"
                    label="Email-Id"
                    value={email || ""}
                    type="email"
                    name='email'
                    onChange={handleInputChange}
                />
                <br />
                <TextField
                    id="standard-basic"
                    label="Contact-No"
                    value={contact || ""}
                    type="number"
                    name='contact'
                    onChange={handleInputChange}
                />
                <br />
                <TextField
                    id="standard-basic"
                    label="Adderss"
                    value={adderss || ""}
                    type="text"
                    name='adderss'
                    onChange={handleInputChange}
                />
                <br />
                <button className={classes.submitBtn}
                    // style={{
                    //     backgroundColor: 'green',
                    //     width: 150,
                    //     color: 'white',
                    //     border: 'none',
                    //     padding: 10,
                    //     borderRadius: '2.5px'
                    // }}
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}
export default EditUser;