import { GoTrash } from "react-icons/go";
import { BsPencilSquare } from "react-icons/bs";
import PageLabel from "@/components/Dashboard/PageLabel";

async function getData() {
  const res = await fetch("http://localhost:3000/api/contacts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Contact = async () => {
  const contacts = await getData();

  return (
    <div>
      <PageLabel title="contact" />
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-600 text-white">
            <tr>
              <th className="p-2 border-r w-[20px]">SL</th>
              <th className="p-2 border-r w-[200px]">Name</th>
              <th className="p-2 border-r w-[220px]">Email</th>
              <th className="p-2 border-r">Description</th>
              <th className="p-2 w-[40px] text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map((contact, index) => {
              const { id, name, email, description } = contact || {};
              return (
                <tr key={id} className="border even:bg-white ">
                  <th className="p-2 border-r w-[20px]">{index + 1}</th>
                  <td className="p-2 border-r w-[200px]">{name}</td>
                  <td className="p-2 border-r w-[220px]">{email}</td>
                  <td className="p-2 border-r">{description}</td>
                  <td className="p-2 w-[40px]">
                    <div className="flex items-center justify-center gap-2">
                      <div className="text-xl text-red-600">
                        <GoTrash />
                      </div>
                      <div className="text-xl text-gray-700">
                        <BsPencilSquare />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
