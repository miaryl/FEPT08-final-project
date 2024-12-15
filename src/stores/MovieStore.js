import { defineStore } from 'pinia';
export const useMoviesStore = defineStore('movies', {
  state: ()  => ({
    savedMovies: [],

  }),
  actions:{

    saveMovie(movie){
      if (!this.savedMovies.find((m)  => m.id === movie.id)) {
        
        this.savedMovies.push(movie);
      }
    },
    removeMovie(movieId){
      this.savedMovies = this.savedMovies.filter((movie) => movie.id !== movieId);
    },
  },
});