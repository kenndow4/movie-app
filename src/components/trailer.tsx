"use client"

import { useState } from "react";
import "../css/trailer.css" 
const TrailerComponent = () => {
    
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
      setIsPlaying(!isPlaying);
    };

    return (
        <div className="netflix-video-player">
          <div className="video-container">
            <video
              className={`video-player ${isPlaying ? 'playing' : ''}`}
              controls
              autoPlay
              onClick={togglePlay}
            >
              <source src="tu-video.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>
          <div className="video-details">
            <h2 className="title">Título de la Película</h2>
            <p className="info">
              <span className="director">Director:</span> Nombre del Director{' '}
              <span className="separator">|</span>{' '}
              <span className="year">Año:</span> 2024
            </p>
            <p className="description">
              Breve descripción de la película. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed aliquam mauris ut nulla facilisis,
              sed mattis arcu pharetra.
            </p>
            <p className="actors">
              <strong>Actores:</strong> Nombre del Actor 1, Nombre del Actor 2,
              Nombre del Actor 3
            </p>
          </div>
        </div>
      );
    
}
 
export default TrailerComponent;