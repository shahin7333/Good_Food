import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Dashboard from './Component/Dashboard/Dashboard';
import About from './Component/About/About';
import Reviews from './Component/Reviews/Reviews';
import Blogs from './Component/Blogs/Blogs';
import Error from './Component/Error/Error';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/*' element={<Error></Error>}></Route>
      </Routes>
    </div>

  );
}

export default App;
