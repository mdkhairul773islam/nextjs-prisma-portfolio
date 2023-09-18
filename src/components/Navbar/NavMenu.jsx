import Link from "next/link";
import { usePathname } from "next/navigation";

const headerData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Skill",
    href: "/skill",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Review",
    href: "/review",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
];

const NavMenu = ({ open, setOpen }) => {
  const pathname = usePathname();

  return (
    <nav
      className={`items-center gap-5 lg:gap-10 flex fixed duration-500 ${
        open
          ? "visible opacity-100 !left-0 text-white"
          : "invisible opacity-0 -left-full text-white"
      }  z-10 top-0 flex-col bg-slate-900 h-screen w-[250px] p-7 lg:relative lg:left-auto lg:top-auto lg:h-auto lg:w-auto lg:p-0 lg:flex-row lg:bg-transparent lg:visible lg:opacity-100`}
    >
      {headerData.map(({ label, href }, i) => (
        <Link
          key={i}
          href={href}
          className={`uppercase tracking-widest font-mono relative after:absolute after:content-[''] after:left-0 after:duration-300  after:bottom-0 after:rounded-full after:h-[2px] after:bg-teal-600 hover:after:visible hover:after:opacity-100 hover:after:w-full  ${
            pathname == href
              ? "after:visible after:opacity-100 after:w-full"
              : "after:invisible after:opacity-0 after:w-0"
          }`}
          onClick={() => setOpen(false)}
        >
          {label}
        </Link>
      ))}

      <Link
        target="_blank"
        href="https://drive.google.com/file/d/15Tpm4zu8hcfFJBC2hcr3ad4oMSGFfikY/view?usp=drive_link"
        className="w-full p-2 px-3 border-none bg-teal-500 hover:bg-teal-600 text-white capitalize font-mono text-lg text-center"
        onClick={() => setOpen(false)}
      >
        Download Resume
      </Link>
    </nav>
  );
};

export default NavMenu;
