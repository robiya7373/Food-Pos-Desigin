import {useState} from 'react'
 
import { LuSearch } from "react-icons/lu";
import { productList } from '../../db/data';

console.log(productList);

const HomePage = () => {

  const [tabList, setTabList] = useState(0)

  return (
    <div className=' bg-[#252836] ps-10 w-[1100px]'>

<div>
<div className=' flex justify-between items-center '>
  <div><h1 className='text-[28px] leading-[140%] font-semibold text-white mt-10 '>Jaegar Resto</h1>
  <p className='text-[16px] leading-[140%] font-normal text-neutral-400 pt-2'>Tuesday, 2 Feb 2021</p>
</div>
<div className='seorch flex items-center me-8 mt-10 p-5 gap-4 w-50 h-12 bg-[#2D303E] border-solid border-slate-500 border-2 rounded-xl'>
<LuSearch size={18} className=' text-white' />
  <input   className=' outline-none bg-transparent ' type="seorch" placeholder='Search for food, coffe, etc..' />
</div>
</div>
<div className='gap-8 flex mt-6 pb-4'>
<h3 className= {`text-[14px] font-semibold cursor-pointer ${ tabList === 0 ? "text-[#ff6a00]" : "text-white" }`} onClick={() => setTabList(0)} > Hot Dishes </h3>
<h3 className= {`text-[14px] font-semibold cursor-pointer ${ tabList === 1 ? "text-[#ff6a00]" : "text-white" }`} onClick={() => setTabList(1)} > Cold Dishes </h3>
<h3 className= {`text-[14px] font-semibold cursor-pointer ${ tabList === 2 ? "text-[#ff6a00]" : "text-white" }`} onClick={() => setTabList(2)} > Soup </h3>
<h3 className= {`text-[14px] font-semibold cursor-pointer ${ tabList === 3 ? "text-[#ff6a00]" : "text-white" }`} onClick={() => setTabList(3)} > Grill </h3>
<h3 className= {`text-[14px] font-semibold cursor-pointer ${ tabList === 4 ? "text-[#ff6a00]" : "text-white" }`} onClick={() => setTabList(4)} > Appetizer </h3>
<h3 className= {`text-[14px] font-semibold cursor-pointer ${ tabList === 4 ? "text-[#ff6a00]" : "text-white" }`} onClick={() => setTabList(5)} > Dessert </h3>


</div>
<div className="h-[2px] bg-[#393C49] mt-[-2px]  me-8  relative">
  <span className={`absolute w-[37px] h-[5px] mt-[-1px] border-[#ff6a00] rounded-full ${
    tabList == 0
    ? "left-[0]" 
     : tabList == 1
     ? "left-[105px]"
      : tabList == 2
      ? "left-[217px]"
       : tabList == 3
       ? "left-[285]"
        : tabList == 4
        ? "left-[345px]"
        : "left-[442px]"
  }`} >
  </span>
</div>
<div className=' flex items-center justify-between'>
  <h2  className='text-[20px] leading-[140%] font-semibold text-white mt-8 '>Choose Dishes</h2>
<div className=' items-center me-8 mt-10 p-3  text-white bg-black border-solid border-slate-600 border-2 rounded-xl'> 
 <select   className=' text-white outline-none bg-transparent ' >
    <option className=' bg-slate-950 '  value="Dine In">Dine In</option>
    <option className=' bg-slate-950 '  value="To Go">To Go</option>
    <option className=' bg-slate-950 '  value="Delivery">Delivery</option>
  </select>
  </div>
</div>
</div>
 
<div className='grid grid-cols-3 gap-5 me-8'>
  {
    productList.map((product)=>(
      <div className="card w-[192px] h-[226px] bg-black">
        <img src={product.img} alt="Image" className='rounded-full w-[140px] h-[130px]' />
        <h3>{product.name}</h3>
        
      </div>
    ))
  }
</div>

    </div>
  )
}

export default HomePage