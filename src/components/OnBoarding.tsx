import React, { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { api } from "~/utils/api";

type Props = {
  onClose: () => void;
};

function newUser() {
  return api.userAlerts.createUser.useMutation();
}

const OnBoarding: React.FC<Props> = ({ onClose }) => {
  const createUserMutation = api.userAlerts.createUser.useMutation();

  async function handleNewUser() {
    await createUserMutation.mutateAsync().then((res) => {
      localStorage.setItem("userId", res.userId);
      onClose();
    });
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex w-[600px] flex-col rounded-lg border-2 border-[#5b5b71] bg-[#13161B] p-10 ">
        <h1 className="mb-3 text-center text-4xl font-semibold text-[#eeeff0]">
          <span className="font-bold">mechfeed</span>
        </h1>
        <p className="text-lg text-[#b4bccb]">
          Keep missing items listed at great prices because someone always beats
          you to it? Mechfeed allows you to monitor and receive alerts from all
          mechanical keyboard markets in real-time.
        </p>
        <div className="my-3 text-[#b4bccb]">
          <p className="font-medium text-[#c2cad8]">Markets Monitored:</p>
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
          <p className="mx-1 flex font-semibold">
            <span className="mr-4 flex items-center ">
              <FiAlertTriangle size={20} />
            </span>{" "}
            If you clear site data at any point, you will lose your alerts and
            any configured settings we provide in the future.
          </p>
        </div>
        <button
          onClick={() => handleNewUser()}
          className="rounded bg-[#282C34] px-2 py-2 text-[#c3cad6]  transition duration-150 ease-in-out hover:bg-[#3C424D]"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default OnBoarding;
