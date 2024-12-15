<template>
  
    <div class="max-w-4xl mx-auto p-4">
      
      <h2 class="text-3xl font-bold text-center mb-6">
        {{ movieDetail.title }}
      </h2>

      
      <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
        
        <div class="w-full md:w-1/3 flex justify-center">
          <img
            :src="'https://image.tmdb.org/t/p/w500/' + movieDetail.poster_path"
            alt="Movie Poster"
            class="rounded-lg shadow-lg"
          />
        </div>

        
        <div class="w-full md:w-2/3 text-left">
          <p class="text-gray-400 mb-2">
            Release Date: {{ movieDetail.release_date }}
          </p>
          <p class="text-gray-700 leading-relaxed">
            {{ movieDetail.overview }}
          </p>
        </div>
      </div>
    </div>
  
  
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const movieDetail = ref({});

    onMounted(async () => {
      const movieId = route.params.id;

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=78aa8825ddc648227332e26718ec01e1`
      );
      const data = await response.json();
      movieDetail.value = data;
    });

    return {
      movieDetail,
    };
  },
};
</script>

<style></style>
