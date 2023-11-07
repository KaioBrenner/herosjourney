import { HiUserCircle } from "react-icons/hi";
import { BiSolidPlanet } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="w-44 bg-zinc-900 h-full shadow-lg flex flex-col items-center py-12">
      <div className="flex flex-col items-center">
        <HiUserCircle color="#6442EE" size={40}></HiUserCircle>
        <h1 className="text-3xl mt-4">Ricardo</h1>
      </div>

      <div className="flex justify-center items-center w-[80%] bg-main rounded-lg py-2 mt-24">
        <BiSolidPlanet color="white"></BiSolidPlanet>
        Cartas
      </div>
    </div>
  );
};

export default Sidebar;
