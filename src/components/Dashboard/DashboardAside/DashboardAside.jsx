"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const asideData = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Skill", href: "/dashboard/skill" },
  { label: "Portfolio", href: "/dashboard/portfolio" },
  { label: "Testimonial", href: "/dashboard/testimonial" },
  { label: "Blog", href: "/dashboard/blog" },
  { label: "Services", href: "/dashboard/service" },
  { label: "Contact", href: "/dashboard/contact" },
];

const DashboardAside = () => {
  const pathname = usePathname();

  return (
    <div className="h-[calc(100vh_-_64px)] bg-white border-r">
      <div className="p-6">
        {asideData?.map(({ href, label }, i) => (
          <Link
            key={i}
            href={href}
            className={` block p-2 rounded-sm  mb-2 font-mono uppercase  text-center text-lg tracking-widest hover:text-white hover:bg-teal-600 ${
              pathname == href
                ? "bg-teal-600 text-white"
                : "bg-slate-200 text-black"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardAside;
