
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetail from './components/CardsDetail';
import Cards from './components/Cards';
import {Routes, Route} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import Faq from './components/Faq';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/cart/:id' element={<CardsDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
