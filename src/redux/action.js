import axios from "axios";
import * as types from "./actionTypes";

const getUsers= (users)=>({
    type: types.GET_USERS,
    payload: users,
});

export const loadUsers = ()=>{
    return function(dispatch) {
        // axios.get(`${process.env.REACT_APP_API_KEY}`)
        axios.get('http://localhost:5000/user/')
        .then((res)=>{
            console.log("res", res);
            dispatch(getUsers(res.data))
        })
        .catch((error)=> console.log("Error :", error))
    };
};