import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import LogoIcon from "./components/LogoIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex w-full">
      <div className="w-full h-screen flex flex-col items-center justify-center gap-12">
        <div className="flex">
          <LogoIcon />
        </div>

        <div className="flex flex-col items-center justify-center">
          <Button className="bg-white" disabled>
            <Loader2 className="h-8 w-8 animate-spin text-[#0166FF]" />
          </Button>
          <h1>Түр хүлээнэ үү...</h1>
        </div>
      </div>
      vf{" "}
    </div>
  );
}
