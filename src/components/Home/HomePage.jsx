import { useState } from "react";

import { LuSearch } from "react-icons/lu";
import { productList } from "../../db/data.js";



const HomePage = ({menuItems, filterItems, setItem, item, filter, searchText, setStyle, style}) => {


  return (
    <div className=" bg-[#252836] ps-10 w-full ">
      <div>
        <div className=" flex justify-between items-center ">
          <div>
            <h1 className="text-[30px] leading-[140%] font-semibold text-white mt-10 ">
              Jaegar Resto
            </h1>
            <p className="text-[16px] leading-[140%] font-normal text-neutral-400 pt-2">
              Tuesday, 2 Feb 2021
            </p>
          </div>
          <div className="seorch flex items-center me-10 mt-10 p-5 gap-4 w-50 h-12 bg-[#2D303E] border-solid border-slate-500 border-2 rounded-xl">
            <LuSearch size={18} className=" text-white" />
            <input
              className=" outline-none bg-transparent text-white "
              onChange={searchText}
              type="search"
              value={filter}
              placeholder="Search for food, coffe, etc.."
            />
          </div>
        </div>

        <div className="gap-8 flex mt-6 ms-[-30px] pb-4">

          <h3 onClick={() => {
            setItem(productList);
            setStyle(10); 
          }
          } 
            className={`text-[16px] font-semibold cursor-pointer ${
             style  === 10 ? "text-[#ff6a00]" : "text-white"
            }`}
            // onClick={() => setTabList(0)} 
          >
            {/* All */}
          </h3> 

       {

        menuItems.map((val, index)=> (
          <h3
          onClick={() => {
            filterItems(val, index);
            setStyle(index)
          }}
          className={`text-[16px] font-semibold cursor-pointer ${
            style === index ? "text-[#ff6a00]" : "text-white"
          }`}
        >
          {val}
        </h3>
        ))
       }

       

        </div>

        <div className="h-[2px] bg-[#393C49] mt-[-2px]  me-10  relative">

        </div>
        <div className=" flex items-center justify-between pb-10">
          <h2 className="text-[20px] leading-[140%] font-semibold text-white mt-8 ">
            Choose Dishes
          </h2>
          <div className=" items-center me-10 mt-10 p-3  text-white bg-[#1F1D2B] border-solid border-slate-600 border-2 rounded-xl">
            <select className=" text-white outline-none bg-transparent ">
              <option className=" bg-slate-950 " value="Dine In">
                Dine In
              </option>
              <option className=" bg-slate-950 " value="To Go">
                To Go
              </option>
              <option className=" bg-slate-950 " value="Delivery">
                Delivery
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 me-8 h-[54vh]  scrollProduct overflow-y-scroll">
        {item.map((product) => (
          <div className="card w-[200px] h-[250px] bg-[#1F1D2B] my-7 rounded-[14px]">
            <div className=" items-center justify-center text-center">
              <img
                src={product.img}
                alt="Image"
                className="rounded-full w-[140px] h-[130px] mx-8 mt-[-30px] mb-10 hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
              />
              <h3 className="text-white">{product.name}</h3>
              <p className="  my-3 text-white">{product.price}</p>
              <p className=" text-white">{product.qty}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HomePage;
