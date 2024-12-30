import { Search } from "lucide-react";
import Heading from "../Heading";
import InputBox from "../InputBox";
import User from "../User";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button";

const Dashboard = () => {
  const [response, setResponse] = useState([]);
  const [filterText, setFilterText] = useState("");
  const usersDataCall = async () => {
    const responseArray = await axios.get(
      `http://localhost:3000/api/v1/user/bulk?filter=${filterText}`
    );
    setResponse(responseArray);
  };
  useEffect(() => {
    
    usersDataCall();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center w-72">
          <Heading label={"Balance :"} />
          <p>$8000</p>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="w-96">
            <InputBox
              placeholder={"search for users"}
              onChange={(e) => {
                setFilterText(e.target.value);
              }}
            />
          </div>

          <div className="mx-1">
            <Button
              label={<Search />}
              onClick={async () => {
                const responseArray = await axios.get(
                  `http://localhost:3000/api/v1/user/bulk?filter=${filterText}`
                );
                setResponse(responseArray);
              }}
            />
          </div>
        </div>
      </div>
      <Heading label={"All users"} />
      <div>
        {response&&response?.data?.user.map((e) => (
          <User firstname={e.firstName} lastname={e.lastName} key={e._id} id={e._id} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
