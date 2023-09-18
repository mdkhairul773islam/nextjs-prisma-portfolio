import Link from "next/link";
import { AiOutlineExpand } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";

const DashboardHeader = () => {
  return (
    <div className="">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-teal-600 font-mono border-2 border-teal-600 h-10 w-10 flex items-center justify-center text-3xl font-bold"
          >
            M
          </Link>
          <div className="flex items-center gap-10">
            <div className="text-2xl cursor-pointer">
              <AiOutlineExpand />
            </div>
            <div className="text-2xl cursor-pointer">
              <MdOutlineDarkMode />
            </div>
            <div className="text-2xl cursor-pointer">
              <FiSun />
            </div>
            <div>
              <Link
                href="/"
                className="p-2 px-3 border-none bg-teal-500 hover:bg-teal-600 text-white capitalize font-mono text-lg text-center"
              >
                View Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
