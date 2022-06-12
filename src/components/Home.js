import React, { useEffect } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, loadUsers } from "../redux/action";
import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        marginTop: 100,
        minWidth: 900,
    },
});

const Home = () => {
    const Styles = useStyles();

    let dispatch = useDispatch()

    const { users } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const handleDeleteButton = (id) => {
        if (window.confirm("Are you sure wanted to delete the user ?")) {
            dispatch(deleteUser(id))
        }
    }
    return (
        <div>
            {!!users === " " ? <p> Please Start json server go to terminal and type 'npm run server'</p> : " "
            }
            <Link to="add">
                <button style={{
                    display: 'flex',
                    justifyContnt: 'flex-end',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    padding: 5,
                    marginTop: "20px",
                    borderRadius: '2.5px'
                }}>
                    Add New User
                </button>
            </Link>
            {/* <Button variant="contained" color="primary">
                Add user
            </Button> */}
            <TableContainer component={Paper}>
                <Table className={Styles.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="center">Email_Id</StyledTableCell>
                            <StyledTableCell align="center">Contact</StyledTableCell>
                            <StyledTableCell align="center">Address</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users && users.map((elem) => (
                            <StyledTableRow key={elem.id}>
                                <StyledTableCell component="th" scope="row">
                                    {elem.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{elem.email}</StyledTableCell>
                                <StyledTableCell align="center">{elem.contact}</StyledTableCell>
                                <StyledTableCell align="center">{elem.adderss}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <button
                                        style={{
                                            marginRight: 10,
                                            backgroundColor: 'red',
                                            color: 'white',
                                            border: 'none',
                                            padding: 5,
                                            borderRadius: '2.5px'
                                        }}
                                        onClick={() => handleDeleteButton(elem.id)}>
                                        Delete
                                    </button>
                                    <Link to={`/edit/:${elem.id}`}>
                                        <button style={{
                                            backgroundColor: 'green',
                                            color: 'white',
                                            border: 'none',
                                            padding: 5,
                                            borderRadius: '2.5px'
                                        }}>Edit
                                        </button>
                                    </Link>

                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default Home;