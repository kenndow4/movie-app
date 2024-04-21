"use client"

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Upload } from "../../types/upload";
import { getmovie } from "@/app/api/getmovie";
import { deleteApi } from "@/app/api/delete";
import { TrashIcon } from "@primer/octicons-react";

export default function Movies() {
  const [movieproduct, setMovieProduct] = useState<Upload[]>([]);

  useEffect(() => {
    const getproducts = async () => {
      try {
        const products = await getmovie();
        setMovieProduct(products);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getproducts();
  }, []);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };

  return (
    <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight">Películas</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
        {movieproduct.map((product) => (
          <div key={product._id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-700 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.poster}
                alt={product.poster}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-[17px] font-medium">
                  <a href="#">
                    <span aria-hidden="true" className="absolute text-[20px]" />
                    {product.title}
                  </a>
                </h3>
              </div>
           {localStorage.getItem("jwt")&&
             <div className="flex">
                 
             <button 
       onClick={() => handleDelete(product._id)} 
       className="bg-red-500 py-1 px-2 rounded"
   >
       <TrashIcon className="text-white w-[16px] h-[16px]" /> {/* Ajusta el tamaño del ícono */}
   </button>
            
           </div>
           }
            </div>
            <p className="text-[15px] text-gray-500">{product.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
