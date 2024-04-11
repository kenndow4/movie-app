import Carousel from "@/components/cararucel";
import Nav from "@/components/header";
import Movies from "@/components/movies";
import MovieLatest from "@/components/movies-latest";




export default function Home() {
  
  return (
    <div className="">
    

    <div>

      <Nav/>
      {/* <div className="h-screen bg-red-500 w-full">

      </div> */}
      {/* <img src="/img/mv.jpg" alt="a" width={100} height={200}className="w-full" style={{ height: 'calc(100vh - 100px)' }}/> */}
     

      <Carousel/>
      
      <MovieLatest/>
      <Movies/>
    </div>
    </div>
  );
}
