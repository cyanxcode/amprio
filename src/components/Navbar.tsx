import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  return (
    <>
      <nav className="flex px-10 h-20 bg-[#013236] text-white">
        <CiMenuBurger size={30} />
        <Image src="/Logo.png" width={250} height={40} alt="Amprio"></Image>
        <CiShoppingCart size={30} />
      </nav>
    </>
  );
}
