<template>
    <div>
      <h2 class="text-3xl font-bold text-center">{{movieDetail.title}}</h2>


      <div class="text-center mt-4 " v-if="movieDetail.poster_path" >
        <img :src="'https://image.tmdb.org/t/p/w500/' + movieDetail.poster_path" alt="Movie Poster" />
      </div>


      
      <p class="text-center text-gray-400">{{ movieDetail.release_date }}</p>
      <p class="text-center mt-4">{{ movieDetail.overview }}</p>
      
    </div>
  </template>
  
  <script>
  import {ref, onMounted} from 'vue';
  import { useRoute } from 'vue-router';  
  
  export default {

    setup() {
      const route = useRoute();  
      const movieDetail = ref({});
  
      onMounted(async () => {

        const movieId = route.params.id;  

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=78aa8825ddc648227332e26718ec01e1`);
        const data = await response.json();
        movieDetail.value = data;  
      });
  
      return {
        movieDetail,
      };
    },
  };
  </script>
  
  <style>
  
  </style>