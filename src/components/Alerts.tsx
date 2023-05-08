import React from "react";
import { AiFillBell, AiOutlinePlus } from "react-icons/ai";
import { BsArrow90DegRight } from "react-icons/bs";

type Props = {
  onClose: () => void;
};

const Alerts: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="h-full w-full">
      <div className="fixed right-0 flex h-full w-[600px] flex-col rounded-xl bg-[#17171b] p-2 pl-7 pb-7 text-white">
        <div className="flex border-b border-[#494950] pb-2">
          <div className="mt-2 flex items-center">
            <AiFillBell size={19} />
            <h1 className="font ml-1 text-lg font-bold">Alerts</h1>
            <span className="mx-2 h-2 w-2 justify-center rounded-full bg-[#6ae953]"></span>
          </div>
          <div
            onClick={onClose}
            className="ml-auto cursor-pointer rounded border border-[#a7a7a761] bg-[#00000039] p-3 font-extrabold  transition duration-150 ease-in-out hover:border-[#dadada94] hover:bg-[#16161656]"
          >
            <BsArrow90DegRight size={17} />
          </div>
        </div>
        <div className="flez mt-3">
          <div className="font-medium">Add Alerts</div>
          <div className="my-1 flex">
            <input
              className="min-w-[300px] rounded bg-[#00000078] px-3 py-2 outline-none"
              type="text"
              placeholder="gmk, dandy, -daisy"
            />
            <div className="flex items-center justify-center rounded bg-[#030303] px-3 pb-1 text-xl ">
              +
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="font-medium">My Alerts</div>
          <div className="mt-2 h-[150px] rounded bg-[#00000038]"></div>
        </div>
        <div className="my-3 font-medium">Matched Listings (13)</div>
        <div className="flex flex-1 flex-col overflow-y-scroll bg-[#00000020] rounded">
          {new Array(13).fill(0).map((item) => {
            return (
              <div className="mb-1 rounded bg-[#00000057] px-5 py-3">
                <p>Matched alert: gmk dandy, dandy, dandy daisy</p>
                <p>r/Mechmarket</p>
                <p>WTS GMK Dandy Want Paypal</p>
                <p>Looking to sell GMK Dandy and...</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Alerts;
