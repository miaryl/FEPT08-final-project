<template>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>

  </template>


  
  <script>
  import MovieCard from './MovieCard.vue';
  

  export default {
    props: ['movies'],
    components: { MovieCard },
  }
  </script>
  
  <style>

 </style>
