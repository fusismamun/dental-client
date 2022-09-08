import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Appointment from './pages/Appointment/Appointment';
import Register from './pages/Login/Register';
import PrivetRoute from './pages/Login/PrivetRoute';
import Dashboard from './pages/dashboard/Dashboard';
import Navigation from './pages/Shared/Navigation/Navigation';
import Footer from './pages/Shared/Footer/Footer';
import MyAppointment from './pages/dashboard/MyAppointment';
import MyReview from './pages/dashboard/MyReview';
import Users from './pages/dashboard/Users';
import Payment from './pages/dashboard/Payment';



function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appointment" element={<PrivetRoute> <Appointment /> </PrivetRoute>}>
        </Route>
        <Route path="/dashboard" element={<PrivetRoute> <Dashboard /></PrivetRoute>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
