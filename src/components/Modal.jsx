import React from "react";

const Modal = ({ children, isModalOpen, setIsModalOpen }) => {
  return (
    <div
      className={`${
        isModalOpen ? "visible" : "invisible"
      } h-screen w-screen  flex items-center justify-center bg-black/70 fixed left-0 top-0`}
    >
      <div
        className={`w-full mx-auto  ${
          isModalOpen
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-0"
        } duration-500`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
