import { useEffect, useState } from "react";

const KEY = '22b2354e';

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {

        // // optional chainning to call callback if it exists
        // // here we use it to close the movie details when a new search is made
        // callback?.();

      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setError('');
          setIsLoading(true);
          const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal });

          if (!res.ok) throw new Error('Something went wrong with fetching movies');
          const data = await res.json();
          if (data.Response === 'False') throw new Error('Movies not found');

          setMovies(data.Search);
          // console.log(data.Search);
          // setIsLoading(false);
          setError('');
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.log(err);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError('');
      }

    //   handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },

    [query],
  );

  return { movies, error, isLoading };
}
