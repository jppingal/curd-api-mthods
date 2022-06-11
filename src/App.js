
import {Routes, Route } from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='create' element={<CreateUser />}/>
    </Routes>

    {/* <CreateUser/>
    <Home/> */}
    </div>
  );
}

export default App;
