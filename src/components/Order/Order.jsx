import React from "react";

import ItemCard from "../../cards/ItemCard";

const Order = () => {
  
  return (
    <div className="bg-[#1F1D2B] w-[500px] p-[18px] ms-4">
      <div>
        <h1 className="text-[20px] leading-[140%] font-semibold text-white ">
          Orders #34562
        </h1>
      </div>
      <div className="btns mt-7">
        <button className=" bg-transparent p-3 border-solid border-slate-500 border-2 rounded-xl text-white ">
          Dine In
        </button>
        <button className=" bg-transparent p-3 border-solid border-slate-500 border-2 rounded-xl text-white mx-2">
          To Go
        </button>
        <button className=" bg-transparent p-3 border-solid border-slate-500 border-2 rounded-xl text-white">
          Delivery
        </button>
      </div>

      <div className="flex text-white my-7 justify-between">
        <h3>Item</h3>
        <div className="flex text-white gap-6">
          <p>Qty</p>
          <p>Price</p>
        </div>
      </div>
      <div className="h-[2px] bg-slate-600 mt-[-2px] relative"></div>

     <div>
      <ItemCard/>
     </div>
     <div className=" text-white flex justify-between mt-3">
      <h2>Sub Totall</h2>
      <p>0.0</p>
     </div>
     <button className="bg-orange-600 p-3 w-full mt-6 border-solid border-slate-100 border-2 rounded-xl text-white">Continue to Payment</button>
    </div>
  );
};

export default Order;
