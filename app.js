import {Routes, Route}from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Dashboards from './dashboards'
function App(){
  return (
    
    <Routes>
      <Route path="/"
      element={<Login/>} />
      <Route path="/Dashboard" element={<Dashboard/>}/>

    </Routes>
    
    
  );
}
export default App;