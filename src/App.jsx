import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Reactmenu/Home';
import About from './Reactmenu/About';
import Contact from './Reactmenu/Contact';
import NavBar from './Reactmenu/NavBar';
import Services from './Reactmenu/Services';
import Order from './Reactmenu/Order';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/About" element = {<About/>}></Route>
          <Route path='/Con' element={<Contact/>}></Route>
          <Route path='*' element={<Home/>}></Route>
          <Route path='/serve' element= {<Services/>}> </Route>
          <Route path='/order' element={<Order/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
