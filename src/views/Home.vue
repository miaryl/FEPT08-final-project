<template>
    <div>
        <SearchBar @search="handleSearch"/>

        <div class="mt-7">

            <h2 class="text-2xl text-center font-bold">MOVIES</h2>

            <div class="grid grid-cols-4 gap-5 mt-4 ">

                <div class="bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer"
                     @click="goToDetailPage(movie.id)"
                     v-for="movie in filteredMovies"
                     :key="movie.id">

                    <img class="h-100 w-full object-cover" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path ">
                    <p class="text-white text-center p-2">{{movie.title}}</p>
                </div>
            </div>
        </div>


    </div>
    
</template>



<script>
import SearchBar from '../components/Searchbar.vue'
import { useRouter } from 'vue-router';
import {ref} from 'vue';



export default {
    components:{
      SearchBar,

    },
    setup() {
      const movies = ref([]);
      const filteredMovies = ref([]);
      const router = useRouter();  
  

      const fetchMovies = async ()   => {

      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=78aa8825ddc648227332e26718ec01e1'
      );

      const data = await response.json();

      movies.value = data.results;
      filteredMovies.value = data.results;


    };

    
    const handleSearch = async (query) => {
      if(!query){
        filteredMovies.value = movies.value; 

        return;
      }

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=78aa8825ddc648227332e26718ec01e1&query=${query}`
      );
      const data = await response.json();
      filteredMovies.value = data.results;
    };




    const goToDetailPage = (movieId) => {
      router.push({ name: 'Details', params: { id: movieId } });
    };

    
    fetchMovies();

    return {
      filteredMovies,
      handleSearch,
      goToDetailPage,
    };
  },
};
</script>


<style>
    
</style>