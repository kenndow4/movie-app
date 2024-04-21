"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Bars3Icon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

import { getmovie } from "@/app/api/getmovie";
import { Upload } from "../../types/upload";
import { deleteApi } from "@/app/api/delete";

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  afterChange: (index: number) => void;
}





export default function MovieLatest() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [movieproduct, setMovieProduct] = useState<Upload[]>([]);

  const handleDelete = async (productId: string) => {
    console.log("Eliminando película con ID:", productId);
    try {
      const res = await deleteApi(productId);
      console.log(res); // Muestra la respuesta de la API en la consola
      // Actualiza el estado de las películas después de la eliminación
      setMovieProduct(movieproduct.filter((product: any) => product.id !== productId));
    } catch (error) {
      console.error("Error al eliminar la película:", error);
    }
  };

  useEffect(() => {
    const getproducts = async () => {
      // Llama a la función asíncrona getmovie
      const products = await getmovie();
      // Ordena los productos por año en orden descendente (de los más recientes a los más antiguos)
      const sortedProducts = products.sort((a: { year: number; }, b: { year: number; }) => b.year - a.year);
      // Actualiza el estado con los productos ordenados
      setMovieProduct(sortedProducts);
    }

    // Llama a getproducts dentro de useEffect para que se ejecute después de que el componente se monte
    getproducts();

    // No necesitas incluir movieproduct en las dependencias de useEffect si solo deseas que se ejecute una vez
  }, []);

  console.log(movieproduct)

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    afterChange: (index) => setSelectedProduct(index)
  };

  const handleEdit = (productId: number) => {
    console.log("Editando película con ID:", productId);
    // Aquí va la lógica para editar la película con el ID productId
  };

  return (
    <div className="w-[95%] m-auto ">
      <div className="mt-20">
        <h1 className="ml-5">Ultimas peliculas</h1>
        <Slider {...settings}>
          {movieproduct && movieproduct.map((product:any, index:any) => (
            <div key={product._id} className={`group relative h-[450px] opacity-[0.6] ${index === selectedProduct ? 'selected-product' : ''} pt-10 pl-5`}>
              <div className={`aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-700 lg:aspect-none group-hover:opacity-75 lg:h-80 ${index === selectedProduct ? 'border-2 border-white' : ''}`}>
                
                <img
                  src={product.poster}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-[17px] font-medium">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute text-[20px]" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
               {localStorage.getItem("jwt")&&  <div className="flex">
                  <button  onClick={() => handleEdit(product._id)} className="mr-2 bg-green-500 py-1 px-2 rounded"><PencilIcon className="text-white w-[16px] h-[16px] " /></button>
                  <button 
            onClick={() => handleDelete(product._id)} 
            className="bg-red-500 py-1 px-2 rounded"
        >
            <TrashIcon className="text-white w-[16px] h-[16px]" /> {/* Ajusta el tamaño del ícono */}
        </button>
                 
                </div>
               }
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
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