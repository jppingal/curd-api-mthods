import axios from "axios";
import * as types from "./actionTypes";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userDeleted = () => ({
    type: types.DELETE_USER,
})
const userAdded = () => ({
    type: types.ADD_USER,
})
const getUserEdit = (user)=>({
    type: types.GET_EDIT_USER,
    payload: user,
})
const userUpdated = ()=>({
    type: types.UPDATE_USER,


})

export const loadUsers = () => {
    return function (dispatch) {
         axios.get(`${process.env.REACT_APP_API_KEY}`)
        // axios.get('http://localhost:5000/user/')
            .then((res) => {
                // console.log("res", res);
                dispatch(getUsers(res.data))
            })
            .catch((error) => console.log("Get Error :", error))
    };
};

export const deleteUser = (id) => {
    return function (dispatch) {
        // axios.get(`${process.env.REACT_APP_API_KEY}`)
        axios.delete(`${process.env.REACT_APP_API_KEY}${id}`)
            .then((res) => {
                // console.log("res", res);
                dispatch(userDeleted())
                dispatch(loadUsers())
            })
            .catch((error) => console.log("Delete Error :", error))
    };
};

export const addUser = (user)=>{
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API_KEY}`, user)
        .then((res)=> {
            console.log("Add User in Action", res);
            dispatch(userAdded());
            dispatch(loadUsers())
        })
        .catch((error)=> console.log("Add User Err :", error))
    }
}


export const getEditableUser = (id) => {
    
    return function (dispatch) {
        console.log("get Edit id in action: ", id);
        // axios.get(`${process.env.REACT_APP_API_KEY}`)
        axios.get(`${process.env.REACT_APP_API_KEY}${id}`)
            .then((res) => {
                console.log("res", res);
                dispatch(getUserEdit(res.data))
                dispatch(loadUsers())
            })
            .catch((error) => console.log("Edit User Error :", error))
    };
};
export const updateUser = (user, id) => {
    
    return function (dispatch) {
        console.log("get Update id in action:updateUser ", user);
        // axios.get(`${process.env.REACT_APP_API_KEY}`)
        axios.put(`${process.env.REACT_APP_API_KEY}${id}`, user)
            .then((res) => {
                console.log("res", res);
                dispatch(userUpdated())
                // dispatch(loadUsers())
            })
            .catch((error) => console.log("Update User Error :", error))
    };
};