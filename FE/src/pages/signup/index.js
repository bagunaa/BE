import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
// import LogoIcon from "@/components/icon/LogoIcon";
// import vector from "/assets/vector.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex w-full">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="flex">{/* <LogoIcon /> */}</div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl">Create Geld account</h1>
          <p className="text-[#334155]">
            Sign up below to create your Wallet account
          </p>
        </div>
        <div className="w-[384px]">
          <Input className="mt-4" type="email" placeholder="Name" />
          <Input className="mt-4" type="email" placeholder="Email" />
          <Input className="mt-4" type="email" placeholder="Password" />
          <Input className="mt-4" type="email" placeholder="Re-Password" />

          <Button asChild className="bg-[#0166FF] w-[384px] mt-4">
            <Link href="/login">Sign up</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <p>Already have account?</p>
          <Button className="text-[#0166FF]" variant="link">
            Log in
          </Button>
        </div>
      </div>
      <div className="bg-[#0166FF] w-full h-screen"></div>
    </div>
  );
}
