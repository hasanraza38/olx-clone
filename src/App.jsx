import axios from 'axios'
import Cards from './components/cards'
import { useEffect, useState } from 'react';

function App() {

  let [data,setData]=useState(null)

useEffect(()=>{
  async function getData() {
    const res = await axios('https://fakestoreapi.com/products')
    console.log(res.data);
    setData(res.data)
  }

  getData()
},[])

  return (
    <>
      <h1 className="text-white mt-5 text-2xl font-semibold text-center ">Cards</h1>
      <div className=' m-7  flex gap-6 justify-center items-center flex-wrap'>
    { data?data.map((item)=>{
    return(
      <>

      <Cards img={item.image} title={item.title} description={item.description} btn="click" />
      </>
    )
    
  }) :<h1>loading...</h1> }
  </div>
    </>
  )
}

export default App
