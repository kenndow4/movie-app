
import React, { useState } from "react";



// Componente de Carrusel
const Carousel: React.FC = () => {
  return (
    <div className="relative h-screen mt-[5%]" style={{ height: "calc(100vh - 300px)" }}>
      <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="/video/jock.mp4" type="video/mp4" />
        {/* Agrega aquí otras fuentes de video si es necesario */}
        Tu navegador no admite la etiqueta de video.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="absolute left-10 top-1/2 w-[40%]  transform -translate-y-1/2 flex flex-col items-start justify-center  text-white">
        <h1 className="text-[60px] font-medium">Explora y comparte películas increíbles</h1>
        <p className="text-lg text-gray-400 mt-2"> Bienvenido a nuestra comunidad de cinéfilos. Descubre una amplia variedad de películas, desde clásicos atemporales hasta los últimos estrenos.
          Explora, vota y comparte tus películas favoritas con amigos y familiares. ¡Haz que cada noche de cine sea una experiencia inolvidable!</p>
        <button className="mt-10 bg-[#5218fa] text-white w-[150px] h-[50px] font-medium rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">Explorar</button>
      </div>
    </div>
  );
};

export default Carousel;





