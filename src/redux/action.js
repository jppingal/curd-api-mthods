import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import * as types from "./actionTypes";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userDeleted = () => ({
    type: types.DELETE_USER,
})

export const loadUsers = () => {
    return function (dispatch) {
        // axios.get(`${process.env.REACT_APP_API_KEY}`)
        axios.get('http://localhost:5000/user/')
            .then((res) => {
                console.log("res", res);
                dispatch(getUsers(res.data))
            })
            .catch((error) => console.log("Get Error :", error))
    };
};

export const deleteUser = (id) => {
    return function (dispatch) {
        // axios.get(`${process.env.REACT_APP_API_KEY}`)
        axios.delete(`http://localhost:5000/user/${id}`)
            .then((res) => {
                console.log("res", res);
                dispatch(userDeleted())
                dispatch(loadUsers())
            })
            .catch((error) => console.log("Delete Error :", error))
    };
};