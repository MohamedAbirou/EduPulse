import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image src="/logo.png" width={30} height={30} alt="logo" />
      <p className="text-lg font-semibold mt-2 text-rose-400">EduPulse</p>
    </div>
  );
};
