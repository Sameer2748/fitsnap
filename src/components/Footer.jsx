

const Footer = () => {
  return (
    <div className="grid grid-cols-12 p-20 bg-blue-950 text-gray-400 text-bold">
      <div className="col-span-2 flex flex-col gap-3">
        <h1 className="text-white text-xl text-bold">Company</h1>
        <ul className=" flex gap-3 flex-col text-sm">
          <li>Our story</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </div>
      <div className="col-span-2 flex flex-col gap-3">
        <h1 className="text-white  text-xl text-bold">Help</h1>
        <ul className=" flex gap-3 flex-col text-sm">
          <li>FAQ</li>
          <li>Term and conditions</li>
          <li>Privacy policy </li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="col-span-8 flex flex-row justify-center items-center gap-32 ">
        <div className="">
        <h1>Social Media</h1>
        <div className="flex flex-row">
          <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="" />
          <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" />
        </div>
        </div>
        <div className="flex flex-col gap-4 text-xl text-white">
          <h1>Stay updated with Us</h1>
          <input type="text" placeholder="Your email address" className="p-3 text-sm h-10" /> 
          <button style={{position:"relative", top:"-3.5rem", left:"5rem"}} className=" text-black text-bold "> -></button>
          <p className="text-gray-400">Copyright © 2023 FitSnap</p>
        </div>
      </div>
    </div>
  )
}

export default Footer