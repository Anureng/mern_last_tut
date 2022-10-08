import './App.css';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import {Route,Routes} from "react-router-dom";


function App() {
  return (
    <>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/registration' element={<Registration/>}/>
<Route path='' element={<Error/>}/>
{/* <Route path='/' element={<Home/>}/>
<Route path='/about'>
  <About/>
</Route>

<Route path='/contact'>
  <Contact/>
</Route>


<Route path='/login'>
  <Login/>
</Route>
<Route path='/registration'>
  <Registration/>
</Route> */}
</Routes>
    </>
  );
}

export default App;
