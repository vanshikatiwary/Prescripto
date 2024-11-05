import { useContext } from "react"
import { assets } from "../assets/assets_admin/assets"
import { AdminContext } from "../Context/AdminContext"
import { useNavigate } from "react-router-dom"
import { DoctorContext } from "../Context/DoctorContext"

const Navbar = () => {
    const {aToken, setAToken} = useContext(AdminContext)
    const {dToken, setDToken} = useContext(DoctorContext)

    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        aToken && setAToken ('')
        aToken && localStorage.removeItem('aToken')
        dToken && setDToken ('')
        dToken && localStorage.removeItem('dToken')
    }


  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
        <div className="flex item-center gap-2 text-xs">
            <img className="w-36 sm:w-48 cursor-pointer" src={assets.admin_logo}  alt="" />
            <p className="border px-2.5 padding-top: 0.225rem; padding-bottom: 0.224rem; py-2.5 padding-left: 0.0rem; 
            padding-right: 0.0rem; rounded-full border-gray-500 text-gray-600">{aToken ? 'admin' : 'Doctor'} </p>
        </div>
        <button onClick={logout} className="bg-primary text-white text-sm px-10 py-2 rounded-full">Logout</button>

    </div>
  )
}

export default Navbar