import Link from "next/link";

const PageLabel = ({ title, children }) => {
  return (
    <div className="flex items-center justify-between bg-teal-600 text-white p-3 mb-8">
      <h3 className="text-2xl font-bold font-mono uppercase tracking-widest">
        {title}
      </h3>
      <div className="flex items-center gap-2">
        <Link href="/dashboard">Dashboard</Link>
        <span>/</span>
        <Link href={`/dashboard/${title}`} className="capitalize">
          {title}
        </Link>
      </div>
      {children}
    </div>
  );
};

export default PageLabel;
