import Image from "next/image";
import Logo from "@/components/ui/Vector.svg";
export default function basicLayout() {
  return (
    <div className="flex justify-between items-center gp-4 w-[1440px]">
      <div className="flex gap-6 items-center">
        <Image src="/Logo.svg" width={25} height={25} alt="logo" />
        <p>Dashboard</p>
        <p>Record</p>
      </div>

      <div className="flex gap-6 items-center">
        <button className="flex h-8 justify-center items-center gap-[4px]">
          +Record
        </button>
        <Image src="/Logo.svg" width={25} height={25} alt="logo" />
      </div>
    </div>
  );
}
