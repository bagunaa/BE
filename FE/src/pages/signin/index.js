import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import GeldLogo from "../../components/ui/mycomponents/GeldLogo";

const Signin = () => {
  return (
    <div className=" w-[100%] h-[100vh] flex">
      <div className="w-1/2 flex flex-col justify-center items-center gap-10">
        <div className="flex gap-[9.459px] items-center">
          {/* <GeldLogo /> */}
          <p className="font-semibold text-2xl">Geld</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <p className="font-semibold text-2xl">Welcome back</p>
          <p className="text-lg font-light">
            Welcome back, Please enter your details
          </p>
        </div>

        <div className="flex flex-col gap-3  justify-center items-center">
          <Input className="w-[384px] h-12" placeholder="Email" />
          <Input className="w-[384px] h-12" placeholder="Password" />
          <Button className="w-[384px] h-12 bg-blue-700 rounded-[20px]">
            Log in
          </Button>
        </div>
        <div className="flex justify-center gap-4">
          <p className="text-lg font-light"> Don't Have a account?</p>{" "}
          <p className="text-lg font-light"> Sign up</p>
        </div>
      </div>
      <div className="w-1/2 bg-blue-700"></div>
    </div>
  );
};
export default Signin;
