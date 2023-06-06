import './App.css';
import Navbarcomp from './components/Navbarcomp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Resume from './components/Resume';
import Interview from './components/Interview';
import FindJob from './components/FindJob';

function App() {
  return (
    <div className='App'>
      <Navbarcomp />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/> 
        <Route path="/Registration" element={<Registration/>}/> 
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/Interview" element={<Interview/>}/>
        <Route path="/FindJob" element={<FindJob/>}/>
      </Routes>
    </div>
  );
}

export default App;
