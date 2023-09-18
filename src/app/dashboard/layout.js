import DashboardAside from "@/components/Dashboard/DashboardAside/DashboardAside";
import DashboardHeader from "@/components/Dashboard/DashboardHeader/DashboardHeader";
import "../globals.css";

export const metadata = {
  title: "Dashboard - Mehedi's Portfolio",
  description: "I am a frontend web developer in Mymensingh, Bangladesh",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <DashboardHeader />
        <div className="grid grid-cols-[260px_auto] items-start">
          <DashboardAside />
          <div className="min-h-[calc(100vh_-_64px)] p-10 bg-gray-50 border-t">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default layout;
