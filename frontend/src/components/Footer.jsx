import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      {/* ------- Footer Grid ------- */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
        {/* ----- Left Section ------ */}
        <div>
          <img src={assets.logo} alt="Logo" />
          <p className=' mt-4 w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        
        {/* ------ Center Section ------ */}
        <div>
          <p className=' text-xl font-medium mb-3'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        
        {/* ------- Right Section ------ */}
        <div>
          <p className='text-xl font-medium mb-3'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>prescripto@gmail.com</li>
          </ul>
        </div>
        
      </div>
      
      {/* ------- Copyright Text ------- */}
      <div >
        <hr />
        <p className='py-5 text-sm text-center'>Copyright © 2024 Vanshikatiwari - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;


       