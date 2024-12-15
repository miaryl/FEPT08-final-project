<template>
  <div id="app" class="bg-gray-900 text-white">


    <Navbar />


    <main class=" container py-6 px-4 mx-auto ">
      
      <router-view />
    </main>
  </div>
  

   
</template>


<script>
import Navbar from './components/Navbar.vue';

export default {
  name: "App",
  data(){
    return{
      title: "final project"
    }
  },
  components: {
    Navbar
  }
  
}
</script>



<style>
 
  
</style>