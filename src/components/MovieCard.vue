<template>
   <div
      class="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md cursor-pointer"
      @click="goToDetailPage"
    >
     
      <img class="w-full h-64 object-cover"
        :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
        :alt="movie.title"
        
      />
  
      
      <div class="p-4 ">
        <h3 class="text-lg font-semibold truncate">{{ movie.title}}</h3>
        <p class="text-gray-400 text-sm mt-1">{{movie.release_date }}</p>
      </div>
    </div>
</template>


<script>
import { useRouter } from 'vue-router';



export default {
    props:['movie'],
    setup(props){
        const router = useRouter();



        const goToDetailPage= ()=>{
            console.log('movie id: ' + props.movie.id);
            router.push({name: 'Detail',
                params:{id: props.movie.id}
            })
        }
        return {goToDetailPage}
    }
    
};
</script>


<style>
    
</style>