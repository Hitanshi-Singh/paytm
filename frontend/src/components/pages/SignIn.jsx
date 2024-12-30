import { Link } from "react-router-dom";
import Button from "../Button";
import Heading from "../Heading";
import InputBox from "../InputBox";

const SignIn = () => {
  return (
    <>
      <div className="w-3/12 h-4/6 p-5 bg-gray-200 rounded-sm shadow-md flex justify-center items-center flex-col m-auto my-24">
        <Heading label={"SignIn"} />
        <Heading label={"Welcome Back!"} />
        <InputBox label={"Email"} placeholder={"abc@gmail.com"} />
        <InputBox label={"Password"} placeholder={"abc123"} />
        <Button label={"Submit"} />
        <h3>
          Don&apos;t have an account?
          <Link
            to={"/signup"}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            {" "}
            Sign Up
          </Link>
        </h3>
      </div>
    </>
  );
};

export default SignIn;
