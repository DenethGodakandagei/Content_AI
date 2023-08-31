import React from "react";
import img1 from "../assets/images/img.svg";
import img2 from "../assets/images/img2.svg";
import img3 from "../assets/images/img3.svg";
import img4 from "../assets/images/img4.svg";

export const Imageset = () => {
  return (
    <section className="images" id="images">
      <div className="flex-inline ">
        <div className="flex justify-center  flex-items-center">
          <div>
            <img src={img1} className="w-[120px] sm:w-[160px]  p-3 rounded" />
          </div>
          <div>
            <img src={img2} className="w-[120px] sm:w-[160px]  p-3 rounded" />
          </div>
          <div>
            <img src={img3} className="w-[120px] sm:w-[160px] p-3 rounded" />
          </div>
          <div>
            <img src={img4} className="w-[120px] sm:w-[160px] p-3 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};
