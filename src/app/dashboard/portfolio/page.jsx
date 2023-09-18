"use client";
import { useState } from "react";
import PageLabel from "@/components/Dashboard/PageLabel";
import AddPortfolio from "@/components/Dashboard/Portfolio/AddPortfolio";
import Modal from "@/components/Modal";
import { GoTrash } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import Link from "next/link";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      <PageLabel title="portfolio">
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="bg-slate-800 hover:bg-teal-700 text-white p-2"
        >
          Add Portfolio
        </button>
      </PageLabel>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <AddPortfolio setIsModalOpen={setIsModalOpen} />
      </Modal>

      <div className="overflow-x-auto">
        <table className="w-full ">
          <thead className="bg-gray-600 text-white text-left">
            <tr>
              <th className="p-2 border-r w-[20px]">SL</th>
              <th className="p-2 border-r ">Photo</th>
              <th className="p-2 border-r ">Title</th>
              <th className="p-2 border-r ">Github Link</th>
              <th className="p-2 border-r ">Live Link</th>
              <th className="p-2 border-r ">Top Tech</th>
              <th className="p-2 border-r">Categories</th>
              <th className="p-2 w-[40px] text-center">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {/* {portfolio?.map((project, index) => {
              const { id, title,github_link,live_link,tech,category } = project || {};
              return ( */}
            <tr className="border even:bg-white ">
              <th className="p-2 border-r w-[20px]"> 1</th>
              <th className="p-2 border-r w-[20px]">
                <div className="aspect-[3/2] w-full bg-teal-100"></div>
              </th>
              <td className="p-2 border-r w-[200px]">Name</td>
              <td className="p-2 border-r w-[220px] ">
                <Link
                  href="/"
                  target="_blank"
                  className="!block line-clamp-1 text-blue-600 underline"
                >
                  line-clamp-1
                </Link>
              </td>
              <td className="p-2 border-r w-[220px]">
                <Link
                  href="/"
                  target="_blank"
                  className="!block line-clamp-1 text-blue-600 underline"
                >
                  line-clamp-1
                </Link>
              </td>
              <td className="p-2 border-r w-[220px] line-clamp-1">
                HTML, CSS, JS, React, Next
              </td>
              <td className="p-2 border-r">NextJs</td>
              <td className="p-2 w-[40px]">
                <div className="flex items-center justify-center gap-2">
                  <div className="text-xl text-red-600 cursor-pointer">
                    <GoTrash />
                  </div>
                  <div className="text-xl text-gray-700 cursor-pointer">
                    <BsPencilSquare />
                  </div>
                </div>
              </td>
            </tr>
            {/* );
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;
