"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars } from 'react-icons/fa'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignIn, SignUp, UserButton, useUser } from "@clerk/nextjs";


const NavLinks = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/product" },
  { name: "Why Us", link: "/why" },
  { name: "FAQ", link: "/faq" },
  { name: "Contact Us", link: "/contact" },
];

function Navbar() {
  const { isLoaded, isSignedIn, user } = useUser()
  console.log(user)
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <section className="h-[46px] w-full">
      {/* CONTAINER */}
      <div className="flex items-center justify-between h-full  relative">
        {/* HAMBURGER MENU ICON */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <FaBars size={24} className="hover:scale-105 duration-300 ease-in-out" />
        </div>
        {/* LOGO */}
        <div className="pl-16 md:pl-0">
        <h1 className="uppercase font-bold text-[18px] tracking-wider sans">CONNECTbytap</h1>
        </div>
        {/* NAVLINKS */}
        <div className={`lg:flex items-center gap-[32px]  text-[16px] ${menuOpen ? 'bg-gray-50 p-4 pl-0 rounded-md lg:rounded-none lg:p-0 absolute top-12 space-y-1 md:space-y-0 ' : 'hidden'}`}>
          {NavLinks &&
            NavLinks.map(({ name, link }) => (
              <div key={name} className=" duration-300 ease-in-out rounded-md p-1 lg:p-0">
                <Link
                  href={link}
                  className={`hover:underline duration-200 ease-in ${
                    pathname === link ? "text-[#f68051]" : "text-color"
                  }`}
                >
                  {name}
                </Link>
              </div>
            ))}
        </div>
        {/* ACCOUNT/BAG  */}
        <div className="flex items-center gap-4">
          {/* CART */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className=" cursor-pointer hover:scale-105 duration-300 ease-in-out"
          >
            <path
              d="M9.375 20.25C9.375 20.6208 9.26503 20.9834 9.059 21.2917C8.85298 21.6 8.56014 21.8404 8.21753 21.9823C7.87492 22.1242 7.49792 22.1613 7.1342 22.089C6.77049 22.0166 6.4364 21.8381 6.17417 21.5758C5.91195 21.3136 5.73337 20.9795 5.66103 20.6158C5.58868 20.2521 5.62581 19.8751 5.76773 19.5325C5.90964 19.1899 6.14996 18.897 6.45831 18.691C6.76665 18.485 7.12916 18.375 7.5 18.375C7.99728 18.375 8.47419 18.5725 8.82582 18.9242C9.17746 19.2758 9.375 19.7527 9.375 20.25ZM17.25 18.375C16.8792 18.375 16.5166 18.485 16.2083 18.691C15.9 18.897 15.6596 19.1899 15.5177 19.5325C15.3758 19.8751 15.3387 20.2521 15.411 20.6158C15.4834 20.9795 15.6619 21.3136 15.9242 21.5758C16.1864 21.8381 16.5205 22.0166 16.8842 22.089C17.2479 22.1613 17.6249 22.1242 17.9675 21.9823C18.3101 21.8404 18.603 21.6 18.809 21.2917C19.015 20.9834 19.125 20.6208 19.125 20.25C19.125 19.7527 18.9275 19.2758 18.5758 18.9242C18.2242 18.5725 17.7473 18.375 17.25 18.375ZM22.0753 7.08094L19.5169 15.3966C19.3535 15.9343 19.0211 16.4051 18.569 16.739C18.1169 17.0729 17.5692 17.2521 17.0072 17.25H7.77469C7.2046 17.2482 6.65046 17.0616 6.1953 16.7183C5.74015 16.3751 5.40848 15.8936 5.25 15.3459L2.04469 4.125H1.125C0.826631 4.125 0.540483 4.00647 0.329505 3.7955C0.118526 3.58452 0 3.29837 0 3C0 2.70163 0.118526 2.41548 0.329505 2.2045C0.540483 1.99353 0.826631 1.875 1.125 1.875H2.32687C2.73407 1.87626 3.12988 2.00951 3.45493 2.25478C3.77998 2.50004 4.01674 2.84409 4.12969 3.23531L4.81312 5.625H21C21.1761 5.62499 21.3497 5.6663 21.5069 5.74561C21.664 5.82492 21.8004 5.94001 21.905 6.08164C22.0096 6.22326 22.0795 6.38746 22.1091 6.56102C22.1387 6.73458 22.1271 6.91266 22.0753 7.08094ZM19.4766 7.875H5.45531L7.41375 14.7281C7.43617 14.8065 7.48354 14.8755 7.54867 14.9245C7.6138 14.9736 7.69315 15.0001 7.77469 15H17.0072C17.0874 15.0002 17.1656 14.9746 17.2303 14.927C17.2949 14.8794 17.3426 14.8123 17.3662 14.7356L19.4766 7.875Z"
              fill="black"
            />
          </svg>
          {/* ACCOUNT */}
          {
            isSignedIn ? (
              <>
              {/* AVATAR */}
              <UserButton afterSignOutUrl="/" />
              </>
            ): (
              <>
              {/* ACCOUNT SIDEBAR */}
          <Sheet>
  <SheetTrigger> <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className=" cursor-pointer hover:scale-105 duration-300 ease-in-out"
          >
            <path
              d="M12 1.875C9.99747 1.875 8.0399 2.46882 6.37486 3.58137C4.70981 4.69392 3.41206 6.27523 2.64572 8.12533C1.87939 9.97543 1.67888 12.0112 2.06955 13.9753C2.46023 15.9393 3.42454 17.7435 4.84055 19.1595C6.25656 20.5755 8.06066 21.5398 10.0247 21.9305C11.9888 22.3211 14.0246 22.1206 15.8747 21.3543C17.7248 20.5879 19.3061 19.2902 20.4186 17.6251C21.5312 15.9601 22.125 14.0025 22.125 12C22.122 9.3156 21.0543 6.74199 19.1562 4.84383C17.258 2.94567 14.6844 1.87798 12 1.875ZM7.45969 18.4284C7.98195 17.7143 8.66528 17.1335 9.45418 16.7331C10.2431 16.3327 11.1153 16.124 12 16.124C12.8847 16.124 13.7569 16.3327 14.5458 16.7331C15.3347 17.1335 16.0181 17.7143 16.5403 18.4284C15.2134 19.3695 13.6268 19.875 12 19.875C10.3732 19.875 8.78665 19.3695 7.45969 18.4284ZM9.375 11.25C9.375 10.7308 9.52896 10.2233 9.8174 9.79163C10.1058 9.35995 10.5158 9.0235 10.9955 8.82482C11.4751 8.62614 12.0029 8.57415 12.5121 8.67544C13.0213 8.77672 13.489 9.02673 13.8562 9.39384C14.2233 9.76096 14.4733 10.2287 14.5746 10.7379C14.6759 11.2471 14.6239 11.7749 14.4252 12.2545C14.2265 12.7342 13.8901 13.1442 13.4584 13.4326C13.0267 13.721 12.5192 13.875 12 13.875C11.3038 13.875 10.6361 13.5984 10.1438 13.1062C9.65157 12.6139 9.375 11.9462 9.375 11.25ZM18.1875 16.8694C17.4583 15.9419 16.5289 15.1914 15.4688 14.6737C16.1444 13.9896 16.6026 13.1208 16.7858 12.1769C16.9689 11.2329 16.8688 10.2558 16.498 9.36861C16.1273 8.4814 15.5024 7.72364 14.702 7.19068C13.9017 6.65771 12.9616 6.37334 12 6.37334C11.0384 6.37334 10.0983 6.65771 9.29797 7.19068C8.49762 7.72364 7.87275 8.4814 7.50198 9.36861C7.13121 10.2558 7.0311 11.2329 7.21424 12.1769C7.39739 13.1208 7.85561 13.9896 8.53125 14.6737C7.4711 15.1914 6.54168 15.9419 5.8125 16.8694C4.89661 15.7083 4.32614 14.3129 4.1664 12.8427C4.00665 11.3725 4.2641 9.88711 4.90925 8.55644C5.55441 7.22578 6.5612 6.10366 7.81439 5.31855C9.06757 4.53343 10.5165 4.11703 11.9953 4.11703C13.4741 4.11703 14.9231 4.53343 16.1762 5.31855C17.4294 6.10366 18.4362 7.22578 19.0814 8.55644C19.7265 9.88711 19.984 11.3725 19.8242 12.8427C19.6645 14.3129 19.094 15.7083 18.1781 16.8694H18.1875Z"
              fill="black"
            />
          </svg></SheetTrigger>
  <SheetContent className="flex items-center justify-center">
    <SheetHeader>
    <SheetTitle className="font-semibold tracking-wide">Welcome to TapEdge!</SheetTitle>
    <SheetDescription className="">
      <div className="">
      <Tabs defaultValue="register" className="mt-4">
  <TabsList>
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="register">Register</TabsTrigger>
  </TabsList>
  <TabsContent value="login" className="flex"><SignIn /></TabsContent>
  <TabsContent value="register"><span><SignUp /></span></TabsContent>
</Tabs>
</div>
    </SheetDescription>
    </SheetHeader>
    
  </SheetContent>
</Sheet>
              </>
            )
          }
          
        </div>
      </div>
    </section>
  );
}

export default Navbar;
