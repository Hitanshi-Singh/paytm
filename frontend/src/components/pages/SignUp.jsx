import { useState } from "react";
import Button from "../Button";
import Heading from "../Heading";
import InputBox from "../InputBox";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="w-3/12 h-4/6 p-5 bg-gray-200 rounded-sm shadow-md flex justify-center items-center flex-col m-auto my-24">
        <Heading label={"SignUp"} />
        <InputBox
          label={"First Name"}
          placeholder={"John"}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <InputBox
          label={"Last Name"}
          placeholder={"Doe"}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <InputBox
          label={"Email"}
          placeholder={"abc@gmail.com"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputBox
          label={"Password"}
          placeholder={"abc123"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          label={"Submit"}
          onClick={async () => {
            const response = await axios.post(
              "http://localhost:3000/api/v1/user/signup",
              {
                username: email,
                password,
                firstName: firstname,
                lastName: lastname,
              }
            );
            console.log(response);
            localStorage.setItem("token", response.data.token);
          }}
        />
        <h3>
          Already have an account?
          <Link
            to={"/signin"}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            {" "}
            Sign In
          </Link>
        </h3>
      </div>
    </>
  );
};

export default SignUp;
