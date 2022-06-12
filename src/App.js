
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
