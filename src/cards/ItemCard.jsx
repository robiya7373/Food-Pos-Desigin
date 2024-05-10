import React from "react";
 import {productList} from "../db/data"
import { AiOutlineDelete } from "react-icons/ai";

const ItemCard = () => {
  return (
    <div className=" h-[54vh]  scrollProduct overflow-y-scroll">
      {productList.map((product) => (
        <div className="cards my-8  ">
          <div className="flex justify-between">
            <img
              src={product.img}
              alt="Image"
              className="rounded-full w-[50px] h-[50px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
            />
            <div>
              {" "}
              <h3 className="text-white">{product.name}</h3>
              <p className=" text-white">{product.price}</p>
            </div>
            <button className="w-[38px] h-[38px] bg-[#2D303E] rounded-[8px] text-white ">
              0
            </button>
            <p className=" text-white mt-1 ms-2">{product.price}</p>
          </div>
          <div className="flex justify-between gap-4">
            <div className=" flex items-center mt-4 p-5 w-64 h-12 bg-[#2D303E] border-solid border-slate-700 border-2 rounded-xl">
              <input
                className=" outline-none bg-transparent text-white "
                type="text"
                placeholder="Please, just a little bit spicy only."
              />
            </div>

            <button className=" mt-5 w-[38px] h-[38px] bg-[#2D303E] border-solid border-orange-600 border-2 rounded-[8px] text-white ">
              <AiOutlineDelete className=" text-orange-600 m-auto" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
