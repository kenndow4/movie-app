"use client"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const products = [
    {
      id: 1,
      name: 'Batman',
      href: 'https://www.youtube.com/watch?v=mqqft2x_Aa4',
      imageSrc: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7EEP4HTMSZCY7O5LZH44IAHS4Y.jpg&w=750&h=495',
      imageAlt: "Front of men's Basic Tee in black.",
      color: '2002-28943',},

      {
        id: 2,
        name: 'dead pool',
        href: 'https://youtu.be/0JnRdfiUMa8?si=amxF0Iv4K8025xq_',
        imageSrc: 'https://pics.filmaffinity.com/Deadpool-834516798-mmed.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: '2002-28943',},

  ];
  


 export default function Movies () {

 const settings ={
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1
 }

 return (
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight">Películas</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-700 lg:aspect-none group-hover:opacity-75 lg:h-80">
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
      </div>
    </div>
      
    )
 }