"use client"

import { useState, useEffect } from "react";
import "../css/trailer.css";
import { getmovie } from "@/app/api/getmovie";
import { Upload } from "../../types/upload";
import { useParams } from "next/navigation";

const TrailerComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tra, setTra] = useState<Upload>({ _id: "", description: "", link: "", poster: "", title: "", year: 0 });
  const [movieNotFound, setMovieNotFound] = useState(false); // Estado para controlar si la película no se encuentra
  var url = window.location.href;

  // Parsear la URL para obtener sus componentes
  var urlObj = new URL(url);

  // Obtener el valor del parámetro "_id"
  var id = urlObj.searchParams.get("_id");

  const fetchMovieData = async () => {
    try {
      const movies = await getmovie();
      console.log("All movies:", movies);
      const selectedMovie = movies.find((movie: any) => movie._id === id);
      if (selectedMovie) {
        setTra(selectedMovie);
        setIsLoading(false);
      } else {
        setMovieNotFound(true); // Establece el estado como true si la película no se encuentra
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  // Función para extraer el ID del video de YouTube
  const getYoutubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&]{11})/);
    return match ? match[1] : null;
  };

  return (
    <div className="netflix-video-player">
      <div className="video-container">
        {!isLoading && tra && (
          <iframe
            className="video-player"
            src={`https://www.youtube.com/embed/${getYoutubeId(tra.link)}`} // Utiliza la función para obtener el ID del video de YouTube
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ height: "500px" }} // Ajusta la altura aquí (por ejemplo, 500px)
          ></iframe>
        )}
      </div>
      <div className="video-details">
        {isLoading ? (
          <p>Loading...</p>
        ) : movieNotFound ? ( // Muestra el mensaje si la película no se encuentra
          <p>No se encontró la película.</p>
        ) : tra ? (
          <>
            <h2 className="title">{tra.title}</h2>
            <p className="info">
              <span className="separator">|</span>{" "}
              <span className="year">Año:</span> {tra.year}
            </p>
            <p className="description">{tra.description}</p>
            <p className="actors">
              {/* <strong>Actores:</strong> {movieData.actors.join(", ")} */}
            </p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TrailerComponent;



