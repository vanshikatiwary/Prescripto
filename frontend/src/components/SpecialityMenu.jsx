import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-1 text-gray-800' id='speciality'>
      {/* Title */}
      <h1 className='text-3xl font-medium text-center mb-4'>Find by Speciality</h1>

      {/* Paragraph */}
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors,
        schedule your appointments hassle-free.</p>
      
      {/*S[eciality List */}
      <div className= 'flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {specialityData.map((item, index) => (
          <Link onClick={()=> scrollTo(0,0)} key={index} to={`/doctors/${item.speciality}`} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 '>
            <img className='w-16 sm:w-24 mb-2' src={item.image} alt={item.speciality} />
            <p className='mt-2 text-center'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
