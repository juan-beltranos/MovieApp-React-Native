import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieDBPlay, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {

    const [isLoading, setSsLoading] = useState(true);

    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

    const getMovies = async () => {

        const resp = await movieDB.get<MovieDBPlay>('/now_playing');
        setPeliculasEnCine(resp.data.results);
        console.log(resp.data.results);
        
        setSsLoading(false);
    }

    useEffect(() => {
        // now_playing
        getMovies();
    }, []);

  return {
    peliculasEnCine,
    isLoading
  }
}
