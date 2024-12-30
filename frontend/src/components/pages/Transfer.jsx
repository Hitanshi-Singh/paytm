import { CircleUserIcon } from "lucide-react";
import InputBox from "../InputBox";
import { useSearchParams } from "react-router-dom";

const Transfer = () => {
  const [param, setParam] = useSearchParams();
  return (
    <div className="m-auto w-96 h-80 rounded-md mt-56 bg-slate-100 shadow-md flex flex-col p-10  items-center">
      <h1 className="font-bold text-3xl mb-6">Send Money</h1>
      <div className="flex items-center">
        <CircleUserIcon />
        <h1 className="font-bold text-2xl mx-1">{param.get("firstname")+" " + param.get("lastname")}</h1>
      </div>
      <InputBox placeholder={"eg: 100.25"} label={"Amount"} />
      <button className="bg-green-500 rounded-md hover:bg-green-600 py-2 px-4 w-full">
        Tranfer Money
      </button>
    </div>
  );
};

export default Transfer;
