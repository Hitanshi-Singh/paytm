/* eslint-disable react/prop-types */
import { CircleUserRound } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router-dom";

const User = ({ firstname, lastname, id }) => {
  return (
    <div className="flex justify-between px-4 m-2 bg-slate-200 hover:bg-slate-300 items-center rounded-md cursor-pointer">
      <div className="flex w-40 justify-between items-center">
        <div>
          <CircleUserRound />
        </div>
        <div>{firstname + " " + lastname}</div>
      </div>
      <Link
        to={`/transfer?id=${id}&firstname=${firstname}&lastname=${lastname}`}
      >
        <Button
          label={"Send"}
          onClick={() => {
            console.log("Send button is clicked");
          }}
        />
      </Link>
    </div>
  );
};

export default User;
