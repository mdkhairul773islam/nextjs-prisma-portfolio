"use client";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/contacts", inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({});
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="container px-4 mx-auto my-10">
      <form className="max-w-2xl mx-auto border p-10" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-mono pb-3 font-bold">Get In Touch</h1>

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="w-full p-3 border outline-none rounded-sm mb-3"
          value={inputs.name || ""}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="email"
          name="email"
          className="w-full p-3 border outline-none rounded-sm mb-3"
          value={inputs.email || ""}
          onChange={handleChange}
        />

        <textarea
          type="text"
          placeholder="Description"
          name="description"
          className="w-full p-3 border outline-none rounded-sm mb-3"
          value={inputs.description || ""}
          onChange={handleChange}
        ></textarea>

        <div className="text-right">
          <button type="submit" className="bg-teal-600 text-white px-5 py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
