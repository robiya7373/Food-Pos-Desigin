import React, { useEffect, useState } from "react";
import FoodData from "../db/data";
import { useDispatch, useSelector } from "react-redux";


const Category = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories,'ctegory');
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    // h-[2px] bg-[#393C49] mt-[-2px] me-12 relative
    <div className="ml-6 "> 
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden ">
     
        {categories.map((category, index) => {
          return (
           <div>
             <button></button>
           </div>
          )
        })}
      </div>
    
    </div>
  );
};

export default Category;
