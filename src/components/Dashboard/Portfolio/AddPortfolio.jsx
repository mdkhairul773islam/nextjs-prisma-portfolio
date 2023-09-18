"use client";
import axios from "axios";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import ImgUpload from "./ImgUpload";

const options = [
  { value: "reactjs", label: "React Js" },
  { value: "nextjs", label: "Next Js" },
  { value: "html5", label: "HTML 5" },
  { value: "css3", label: "CSS 3" },
  { value: "sass", label: "SASS" },
  { value: "bootstrap", label: "Bootstrap" },
  { value: "nodejs", label: "Node Js" },
  { value: "mongodb", label: "Mongodb" },
  { value: "express", label: "Express Js" },
];

const AddPortfolio = ({ setIsModalOpen }) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputs);
    axios
      .post("/api/portfolio", inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({});
        setIsModalOpen(false);
      });
  };

  const handleSelectLang = (options) => {
    setInputs((prevState) => ({ ...prevState, tech: options }));
  };

  const handleSelectCat = (options) => {
    setInputs((prevState) => ({ ...prevState, category: [options] }));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="border bg-white p-5 w-[80%] mx-auto">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-[30%_auto] gap-6">
          <ImgUpload />

          <div className="flex flex-col gap-3">
            <div className="">
              <label htmlFor="title" className="block mb-2 font-mono font-bold">
                Project Title
                <span className="text-red-600"> *</span>
              </label>
              <input
                type="text"
                id="title"
                placeholder="Project Title"
                name="title"
                required
                className="w-full p-3 border outline-none rounded-sm focus:border-teal-600 "
                value={inputs.title || ""}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="github_link"
                  className="block mb-2 font-mono font-bold"
                >
                  Github Link
                  <span className="text-red-600"> *</span>
                </label>
                <input
                  type="text"
                  id="github_link"
                  placeholder="Github Link"
                  name="github_link"
                  required
                  className="w-full p-3 border outline-none rounded-sm focus:border-teal-600"
                  value={inputs.github_link || ""}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="live_link"
                  className="block mb-2 font-mono font-bold"
                >
                  Live Link
                  <span className="text-red-600"> *</span>
                </label>
                <input
                  type="text"
                  id="live_link"
                  placeholder="Live Link"
                  name="live_link"
                  required
                  className="w-full p-3 border outline-none rounded-sm focus:border-teal-600"
                  value={inputs.live_link || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-mono font-bold">
                Languages
                <span className="text-red-600"> *</span>
              </label>
              <CreatableSelect
                options={options}
                isMulti
                className="react-select-container "
                classNamePrefix="react-select"
                onChange={handleSelectLang}
              />
            </div>

            <div>
              <label className="block mb-2 font-mono font-bold">
                Category
                <span className="text-red-600"> *</span>
              </label>
              <CreatableSelect
                options={[
                  { value: "javascript", label: "Javascript" },
                  { value: "htmlcss", label: "HTML/CSS" },
                  { value: "react", label: "React JS" },
                  { value: "mern", label: "MERN" },
                  { value: "next", label: "NextJS" },
                  { value: "bootstrap", label: "Bootstrap" },
                  { value: "tailwind", label: "Tailwind CSS" },
                ]}
                className="react-select-container"
                classNamePrefix="react-select"
                onChange={handleSelectCat}
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block mb-2 font-mono font-bold"
              >
                Description
                <span className="text-red-600"> *</span>
              </label>
              <textarea
                type="text"
                id="description"
                placeholder="Description"
                name="description"
                required
                className="w-full p-3 border outline-none rounded-sm focus:border-teal-600 "
                value={inputs.description || ""}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="flex items-center gap-2 justify-end col-start-1 col-end-3">
            <div
              onClick={() => setIsModalOpen(false)}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 cursor-pointer"
            >
              Cancel
            </div>
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPortfolio;
