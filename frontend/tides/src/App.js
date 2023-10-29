import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Job } from './pages/Job';
import { FindACofounder } from './pages/Find_A_Cofounder';
import { Apply } from './pages/Apply';
import { NavBar } from './components/navbar';
import { Footer } from './components/footer';
import './App.css';

function App() {
  return (
    <BrowserRouter basename='/'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='job' element={<Job/>}/>
        <Route path='find-a-cofounder' element={<FindACofounder/>}/>
        <Route path='apply' element={<Apply />}/>
      </Routes>
      <Footer />
    </BrowserRouter>  
  );
}

export default App;
