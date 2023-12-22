import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.png" width={30} height={30} alt="logo" />
      <p className="text-lg font-semibold mt-2 text-rose-400">EduPulse</p>
    </Link>
  );
};
