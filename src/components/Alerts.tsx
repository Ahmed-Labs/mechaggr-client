import React from "react";
import { AiFillBell } from "react-icons/ai";
import { BsArrow90DegRight } from "react-icons/bs";

type Props = {
  onClose: () => void;
};

const Alerts: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="h-screen w-full">
      <div className="absolute top-0 bottom-0 right-0 w-[600px] rounded-xl bg-[#2c2c54] text-white">
        <div className="flex flex-col p-7">
          <div className="py flex flex-auto items-center">
            <AiFillBell size={23} />
            <h1 className="font ml-3 text-xl font-bold">Alerts</h1>
            <div onClick={onClose} className="cursor-pointer ml-auto rounded border border-[#ffffff61] p-2 font-extrabold  transition duration-150 ease-in-out hover:bg-[#404079]">
              <BsArrow90DegRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
