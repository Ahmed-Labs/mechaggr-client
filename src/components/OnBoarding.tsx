import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FiAlertTriangle } from "react-icons/fi";

type Props = {
  onClose: () => void;
};

const OnBoarding: React.FC<Props> = ({ onClose }) => {
  function createUser() {
    // User {
    //     userId
    //     alerts []
    // }
    const userId = uuidv4();
    localStorage.setItem("userId", userId);
    onClose();
  }
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex w-[600px] flex-col rounded-lg bg-[#3f3f74] p-10">
        <h1 className="mb-3 text-center text-xl font-semibold text-white">
          Welcome to <span className="font-bold">mechfeed</span>!
        </h1>
        <p className="text-lg text-[#eeeeff]">
          Keep missing items listed at great prices because someone always beats
          you to it? Mechfeed allows you to monitor and receive alerts from all mechanical keyboard
          markets in real-time.
        </p>
        <div className="text-[#eeeeff] my-3">
            <p className="text-white font-medium">Markets Monitored:</p>
          <ul>
            <li>- MechMarket SubReddit</li>
            <li>- MechMarket Discord</li>
            <li>- Canadian Mechanical Keyboards Discord</li>
            <li>- Artisan Trading Discord</li>
            <li>- SingaKBD Discord</li>
            <li>- MechKeys Discord</li>
            <li>- MechGroupBuys Discord</li>
          </ul>
        </div>
        <div className="mb-3 rounded bg-[#dcdf80] px-3 py-4 ">
          <p className="mx-1 flex">
            <span className="mr-4 flex items-center">
              <FiAlertTriangle size={20} />
            </span>{" "}
            If you clear site data at any point, you will lose your alerts and
            any configured settings we provide in the future.
          </p>
        </div>
        <button
          onClick={createUser}
          className="rounded bg-[#6464a4] px-2 py-2 text-white  transition duration-150 ease-in-out hover:bg-[#53538d]"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default OnBoarding;
