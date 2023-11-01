import React from 'react'
import UsefetchData from '../Hooks/Usefetch'
const Property = () => {
    const {data,loading,error}=UsefetchData("http://localhost:3001/hotel/countByType")
    console.log(data)
   console.log(error)
    const images = [
        "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
        "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
      ];
    return (<>
   
   
   <div  className='flex gap-6  justify-center'>
   {
  loading?("Loading..."):
  (
    <>
    {data && images.map((i,x)=>{
        return(

            <div className='text-gray-300 text-2xl font-bold' key={x}>
                <img className='h-[25vh] w-[17vw] rounded-md' src={i} alt="" />
                <div className='absolute p-2  top-[15vw]'>
                <p >{data[x]?.type}</p>
                <p>{data[x]?.count}</p>
                </div>
            </div>
        )
    })
    }
    </>
  )
   }
   </div>
   </>
  )
}

export default Property