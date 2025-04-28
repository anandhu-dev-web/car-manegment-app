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
import AddProducts from './pages/AddProducts';
import CarDetails from './pages/CarDetails';
import Cart from './pages/Cart';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <Router>
      <ToastContainer position='top-center' autoClose={2000}  />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourcars" element={<ProtectedRoute ><OurCars /></ProtectedRoute>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />     
       <Route path="/cardetails" element={<CarDetails/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path='/addproduct' element={<ProtectedRoute ><AddProducts/></ProtectedRoute>}/>
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
