import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import OurCars from './pages/OurCars';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import AddProduct from './pages/AddProducts';

function App() {
  return (
    <Router>
      <ToastContainer position='top-center' autoClose={2000}  />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourcars" element={<OurCars />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/addproduct" element={<AddProduct/>} />
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
