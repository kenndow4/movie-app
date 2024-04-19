"use client"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useState } from "react";

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  afterChange: (index: number) => void;
}

const products = [
    {
      id: 1,
      name: 'Wicked Little Letters',
      href: '#',
      imageSrc: 'https://posters.movieposterdb.com/24_03/0/20234774/l_wicked-little-letters-movie-poster_736025ae.jpg',
      imageAlt: "Ghostbusters: Frozen Empire",
      color: '2004',
    },
    {
      id: 2,
      name: 'Ghostbusters: Frozen Empire',
      href: '#',
      imageSrc: 'https://posters.movieposterdb.com/24_02/2024/21235248/l_ghostbusters-frozen-empire-movie-poster_620b9727.jpg',
      imageAlt: "Front of men's Basic Tee in white.",
      color: '2024',
    },
    {
      id: 3,
      name: 'Kung Fu Panda 4',
      href: '#',
      imageSrc: 'https://posters.movieposterdb.com/23_12/2024/21692408/l_kung-fu-panda-4-movie-poster_1c7ba201.jpg',
      imageAlt: "Front of men's Basic Tee in blue.",
      color: '2024',
    },
    {
      id: 4,
      name: 'The Batman',
      href: '#',
      imageSrc: 'https://posters.movieposterdb.com/22_02/2022/1877830/l_1877830_764432ad.jpg',
      imageAlt: "Front of men's Basic Tee in white.",
      color: '2022',
    },
    {
      id: 5,
      name: 'Arthur the King',
      href: '#',
      imageSrc: 'https://posters.movieposterdb.com/24_02/2024/10720352/l_arthur-the-king-movie-poster_49fc5c1b.jpg',
      imageAlt: "Front of men's Basic Tee in green.",
      color: '2024',
    },
    {
      id: 6,
      name: 'Someone Like You',
      href: '#',
      imageSrc: 'https://posters.movieposterdb.com/23_03/0/22334258/l_someone-like-you-movie-poster_87bb5749.jpg',
      imageAlt: "Front of men's Basic Tee in white.",
      color: '2024',
    },
    {
      id: 7,
      name: 'Dune: Part Two',
      href: '#',
      imageSrc: 'https://posters.movieposterdb.com/24_02/2024/15239678/l_dune-part-two-movie-poster_18c5c05f.jpg',
      imageAlt: "Front of men's Basic Tee in gray.",
      color: '2024',
    },
    // Add more products as needed
  ];
  


 export default function MovieLatest () {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    afterChange: (index) => setSelectedProduct(index)
  };


  return (
    <div className="w-[95%] m-auto ">
      <div className="mt-20">
      <h1 className="ml-5">Mejor calificadas</h1>
        <Slider {...settings}>

      {products.map((product, index) => (
        
       
       <div key={product.id} className={`group relative h-[450px] opacity-[0.6] ${index === selectedProduct ? 'selected-product' : ''} pt-10 pl-5`}>
        
       <div className={`aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-700 lg:aspect-none group-hover:opacity-75 lg:h-80 ${index === selectedProduct ? 'border-2 border-white' : ''}`}>
         
         <img
           src={product.imageSrc}
           alt={product.imageAlt}
           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
         />
       </div>
       <div className="mt-4 flex justify-between">
         <div>
           <h3 className="text-[17px] font-medium">
             <a href={product.href}>
               <span aria-hidden="true" className="absolute text-[20px]" />
               {product.name}
             </a>
           </h3>
           <p className="mt-1 text-sm text-gray-500">{product.color}</p>
         </div>
       </div>
     </div>

      ))}

        </Slider>

      </div>

    </div>
  )
 }
  


   // export default function Movie() {
  //   return (
  //       <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
  //     <h2 className="text-2xl font-bold tracking-tight">Películas</h2>

  //     <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
  //       {products.map((product) => (
  //         <div key={product.id} className="group relative">
  //           <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-700 lg:aspect-none group-hover:opacity-75 lg:h-80">
  //             <img
  //               src={product.imageSrc}
  //               alt={product.imageAlt}
  //               className="h-full w-full object-cover object-center lg:h-full lg:w-full"
  //             />
  //           </div>
  //           <div className="mt-4 flex justify-between">
  //             <div>
  //               <h3 className="text-[17px] font-medium">
  //                 <a href={product.href}>
  //                   <span aria-hidden="true" className="absolute text-[20px]" />
  //                   {product.name}
  //                 </a>
  //               </h3>
  //               <p className="mt-1 text-sm text-gray-500">{product.color}</p>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
      
  //   )
  // }