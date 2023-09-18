"use client";
import Link from "next/link";
import { VscThreeBars, VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-3 bg-[#112240]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="font-mono border-2 h-10 w-10 flex items-center justify-center border-teal-500  text-3xl font-bold tracking-wider">
            <Link href="/" className="text-teal-500">
              M
            </Link>
          </div>

          {/* NavMenu component */}
          <NavMenu open={open} setOpen={setOpen} />

          <div className="block lg:hidden text-2xl border text-gray-100 cursor-pointer">
            {open ? (
              <VscChromeClose className={``} onClick={() => setOpen(false)} />
            ) : (
              <VscThreeBars className={``} onClick={() => setOpen(true)} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
