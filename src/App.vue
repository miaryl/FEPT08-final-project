<template>
  <div class="bg-gray-900 text-white">
    <div>
      <h1 class="text-violet-600">LOGO o TITLE</h1>
      <div class="gap-5">
        <ul>
          <li>
            <router-link to="/">HOME</router-link>
          </li>
          <li>
            <router-link to="/genre">GENRE</router-link>
          </li>
          <li>
            <router-link to="/mylibrary">MY LIBRARY</router-link>
          </li>
        </ul>

      <!--make header component??? look more simple?-->
      </div>
      <div>
        <!--main : make search bar and movie list-->

      </div>
    </div>










    <router-view/>
  </div>
</template>


<script>
export default {
  name: "App",
  data(){
    return{
      title: "final project"
    }
  }
  
}
</script>



<style>
  *{
    background-color: grey;
  }
  
</style>