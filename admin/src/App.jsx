import { useContext } from "react";
import Login from "./Pages/Login"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from "./Context/AdminContext";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Admin/Dashboard";
import AllAppointments from "./Pages/Admin/AllAppointments";
import AddDoctor from "./Pages/Admin/AddDoctor";
import DoctorsList from "./Pages/Admin/DoctorsList";
import { DoctorContext } from "./Context/DoctorContext";
import DoctorDashboard from "./Pages/Doctor/DoctorDashboard";
import DoctorAppointments from "./Pages/Doctor/DoctorAppointments";
import DoctorProfile from "./Pages/Doctor/DoctorProfile";

const App = () => {

  const {aToken} = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
    <div className="flex items-start">
      <Sidebar />
      <Routes>
       {/* Admin Route */ }
      <Route path = '/' element = {<></>} />
      <Route path = '/admin-dashboard' element = {<Dashboard/>} />
      <Route path = '/all-appointments' element = {<AllAppointments/>} />
      <Route path = '/add-doctor' element = {<AddDoctor/>} />
      <Route path = '/doctor-list' element = {<DoctorsList/>} />

      {/* Doctor Route */}
      <Route path="/doctor-dashboard" element = {<DoctorDashboard />} />
      <Route path="/doctor-appointments" element = {<DoctorAppointments />} />
      <Route path="/doctor-profile" element = {<DoctorProfile />} />

    </Routes>
    </div>
    </div>
  ) : (
    <>
    <Login />
    <ToastContainer /> 


    </>
  )
}

export default App