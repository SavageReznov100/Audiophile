import React from "react";
import ImgEarphones from "../../assets/home/desktop/image-earphones-yx1.jpg";
const Add3 = () => {
  return (
    <div className="container pb-48 pt-5">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <img
            src={ImgEarphones}
            className="h-full w-full rounded-lg object-cover object-center"
          />
        </div>

        <div className="flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-8 rounded-lg bg-grey">
          <p className="font-manrope text-[28px] font-bold uppercase tracking-widest">
            yx1 earphones
          </p>
          <div>
            <button className="border border-black px-7 py-4 font-manrope font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white">
              see product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add3;
