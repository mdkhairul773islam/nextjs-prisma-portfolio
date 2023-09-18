import React from "react";

const ImgUpload = () => {
  return (
    <div>
      <div className="aspect-square bg-slate-200"></div>
      <input type="file" className="hidden" id="portfolioImg" />
      <label
        htmlFor="portfolioImg"
        className="block bg-teal-600 text-center mt-2 text-white px-5 py-2"
      >
        Upload Photo
      </label>
    </div>
  );
};

export default ImgUpload;
