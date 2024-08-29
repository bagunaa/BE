import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/router";
import { useRef } from "react";

import Image from "next/image";
import Logo from "@/components/ui/Vector.svg";

const Signin = () => {
  //   const router = useRef();
  //   const formRef = useRef(null);

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const formData = new formData(formRef.current);
  //     const { email, password } = Object.fromEntries(formData);
  //     try {
  //       const response = await axios.post("hhtp://localhost:8000/api/signin", {
  //         email,
  //         password,
  //       });
  //       localStorage.setItem("user", JSON.stringify(response.data.user[0]));
  //       router.push("/dashboard");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // };

  return (
    <div className=" w-[100%] h-[100vh] flex">
      <div className="w-1/2 flex flex-col justify-center items-center gap-10">
        <div className="flex gap-[9.459px] items-center">
          <Image src="/Logo.svg" width={25} height={25} alt="Logo" />
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
