"use client"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const products = [
    {
      id: 1,
      name: 'Star Wars',
      href: '#',
      imageSrc: 'https://www.imdb.com/title/tt0105695/',
      imageAlt: "Front of men's Basic Tee in black.",
      color: '2002-28943',
    },
    {
      id: 2,
      name: 'Harry Potter',
      href: '#',
      imageSrc: 'https://www.imdb.com/title/tt15398776/mediaviewer/rm1405901313/',
      imageAlt: "Front of men's Basic Tee in white.",
      color: '2002-28944',
    },
    {
      id: 3,
      name: 'Lord of the Rings',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
      imageAlt: "Front of men's Basic Tee in blue.",
      color: '2002-28945',
    },
    {
      id: 4,
      name: 'Avatar',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
      imageAlt: "Front of men's Basic Tee in gray.",
      color: '2002-28946',
    },
    {
      id: 5,
      name: 'Jurassic Park',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-05.jpg',
      imageAlt: "Front of men's Basic Tee in green.",
      color: '2002-28947',
    },
    {
        id: 6,
        name: 'Harry Potter',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in white.",
        color: '2002-28944',
      },
      {
        id: 7,
        name: 'Harry Potter',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in white.",
        color: '2002-28944',
      },
    // Add more products as needed
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