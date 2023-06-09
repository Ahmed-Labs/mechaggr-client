import React, { useState, useEffect } from "react";
import { AiFillBell, AiOutlinePlus, AiOutlineInfoCircle } from "react-icons/ai";
import { BsArrow90DegRight, BsPlusLg } from "react-icons/bs";
import { api } from "~/utils/api";
import LoadingSpinner from "./LoadingSpinner";
import { io } from "socket.io-client";

type Props = {
  onClose: () => void;
};

const Alerts: React.FC<Props> = ({ onClose }) => {
  const currUserId = localStorage.getItem("userId");
  const [alertType, setAlertType] = useState<string>("Any");
  const alertTypes = ["Any", "Selling", "Buying", "Artisan"];
  const [alertInput, setAlertInput] = useState<string>("");

  const [addingAlert, setAddingAlert] = useState(false);
  const [matchedAlerts, setMatchedAlerts] = useState(
    new Array(15).fill("r/Mechmarket")
  );

  if (!currUserId) return <div></div>;

  useEffect(() => {
    const socket = io("http://localhost:3333", {
      query: { userId: localStorage.getItem("userId") },
    });

    socket.on("connect", () => {
      console.log("Connected to server.");

      // Emit a message after connecting
      socket.emit("test", "Hello from client!");
    });

    socket.on("message", (message) => {
      setMatchedAlerts((prev) => [message, ...prev]);
      console.log("Received message:", message);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server.");
    });

    return () => {
      socket.disconnect(); // Clean up the socket connection on component unmount
    };
  }, []);

  const userAlertsAPI = api.userAlerts;
  const getAlerts = userAlertsAPI.getAlerts.useQuery(currUserId);
  const userAlertsMethods = {
    addAlert: userAlertsAPI.addAlert.useMutation(),
    removeAlert: userAlertsAPI.removeAlert.useMutation(),
  };

  async function handleAddAlert(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!currUserId) return;
    setAddingAlert(true);

    try {
      const addAlertResult = await userAlertsMethods.addAlert.mutateAsync({
        userId: currUserId,
        alert: alertType + "," + alertInput,
      });

      await getAlerts.refetch();
      setAlertInput("");
    } catch (error) {
      console.error("Failed to add alert:", error);
    } finally {
      setAddingAlert(false);
    }
  }

  async function handleRemoveAlert(alert: string) {
    if (!currUserId) return;

    try {
      const removeAlertResult = await userAlertsMethods.removeAlert.mutateAsync(
        {
          userId: currUserId,
          alert: alert,
        }
      );

      await getAlerts.refetch();
    } catch (error) {
      console.error("Failed to remove alert:", error);
    }
  }

  return (
    <div className="h-full w-full">
      <div className="fixed right-0 flex h-full w-1/5 min-w-[500px] flex-col rounded-l-xl border border-[#8793a85f] bg-[#15202B] p-2 pl-7 pb-7 text-white">
        <div className="flex border-b border-[#8793a85f] pb-2">
          <div className="mt-2 flex items-center">
            <AiFillBell size={19} />
            <h1 className="font ml-1 text-lg font-bold">Alerts</h1>
            <span className="mx-2 h-2 w-2 justify-center rounded-full bg-[#6ae953]"></span>
            {getAlerts.isLoading && <LoadingSpinner />}
          </div>
          <div
            onClick={onClose}
            className="ml-auto cursor-pointer rounded border border-[#a7a7a761] bg-[#00000039] p-3 font-extrabold  transition duration-150 ease-in-out hover:border-[#dadada94] hover:bg-[#16161656]"
          >
            <BsArrow90DegRight size={17} />
          </div>
        </div>
        <div className="mt-3">
          <div className="mb-2 flex items-center font-medium">
            Add Alerts{" "}
            <span className="ml-3 inline-block text-center text-[#8899A6]">
              <AiOutlineInfoCircle />
            </span>
          </div>
          <form
            onSubmit={async (e) => handleAddAlert(e)}
            className="my-1 flex rounded-sm border border-[#22303C]"
          >
            {/* dropdown */}
            <div className="group relative inline-block">
              <button
                type="button"
                className="inline-flex items-center rounded-sm bg-[#22303C] py-2 px-4 font-semibold text-[#f5f5f5]"
              >
                <span className="mr-1 font-normal">{alertType}</span>
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute hidden border border-[#22303C] text-[#e3e3e3] group-hover:block">
                {alertTypes.map((item) => {
                  return (
                    <li key={item} onClick={() => setAlertType(item)}>
                      <div
                        className={`whitespace-no-wrap block cursor-pointer bg-[#22303C] py-2 px-4 hover:bg-[#18222a] ${
                          alertType == item ? "bg-[#18222a]" : ""
                        }`}
                      >
                        {item}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* dropdown end */}
            <input
              className="flex-1 bg-[#00000078] px-3 py-2 outline-none"
              type="text"
              placeholder="include,-exclude"
              value={alertInput}
              onChange={(e) => {
                setAlertInput(e.target.value);
              }}
            />
            <button
              type="submit"
              className="flex cursor-pointer items-center justify-center rounded-r-sm bg-[#2e68ee] p-2 px-2.5 text-xl hover:bg-[#2149a5] "
            >
              {addingAlert ? <LoadingSpinner /> : <BsPlusLg />}
            </button>
          </form>
        </div>

        {/* My Alerts */}
        {/* {data && data.length > 0 && ( */}
        <div className="mt-3">
          <div className="font-medium">Alerts</div>
          <div className="mt-2 max-h-[150px] min-h-[40px] overflow-y-scroll rounded bg-[#00000038] py-1">
            {getAlerts.data?.map((myAlert, idx) => {
              const alertInfo = myAlert.split(",");
              const alertType = alertInfo[0];
              const alertString = alertInfo.slice(1).join(",");
              return (
                <div
                  key={idx}
                  className="mx-2 my-1 inline-block cursor-pointer rounded border border-[#c4c4c430] bg-[#22303C] hover:border-[#d9d9d965]"
                >
                  <span className="bg-[#adadad38 mr-2 border-r border-[#c4c4c430] pr-3 pl-2">
                    {alertType}
                  </span>
                  {alertString}
                  <span
                    onClick={async () => handleRemoveAlert(myAlert)}
                    className="ml-2 pl-1 pr-2 hover:text-[#ffa6a6]"
                  >
                    x
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Matched Listings */}
        <div className="my-3 font-medium">
          Matched Listings <span className="text-sm text-[#8899A6]">(13)</span>
        </div>
        <div className="flex flex-1 flex-col overflow-y-scroll rounded">
          {matchedAlerts.map((listingId: string, idx) => {
            return (
              <div
                key={idx}
                className="mb-1.5 mr-1.5 cursor-pointer rounded border border-[#314353] bg-[#23313d45] px-5 py-3 hover:border-[#91a1bc7e]"
              >
                <p>{listingId}</p>
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
