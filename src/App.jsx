import React, { useEffect, useState } from 'react'
import {productList } from "./db/data.js"
import Nav from './components/Navbar/Nav'
import HomePage from './components/Home/HomePage'
import Order from './components/Order/Order'

const App = () => {

  const [ item, setItem ] = useState(productList)
  const [filter, setFilter] = useState("");
  const [style, setStyle] = useState(10)

  const searchText = (event) => {
    setFilter(event.target.value);
};

useEffect(() => {
  setItem(productList.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filter.toString().toLowerCase())
        );
    }));
}, [filter, productList]);



  const menuItems = [...new Set(productList.map(val => val.catigory))]

  const filterItems = (catigory) => {
    const newItems =  productList.filter((newval) => newval.catigory === catigory)
    setItem(newItems)
}
  return (
    <div className='flex '>
    <Nav/>
    <HomePage 
     menuItems={menuItems}
     filterItems={filterItems}
     setItem={setItem}
     item={item}
     searchText={searchText}
     filter={filter}
     style={style}
     setStyle={setStyle}
    />
    <Order/> 
    </div>
    )
}

export default App