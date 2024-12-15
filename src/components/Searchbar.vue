<template>
    <div>
        <div  class=" container flex justify-center mx-auto">
            <input v-model="query" @input="onSearch"

               type="text" placeholder="movie name ex) venom"
               class="text-gray-800 w-full sm:max-w-lg p-5 rounded-md text-2xl focus:outline-none shadow-xl"
            />
        </div>
        
    </div>
</template>



<script>
export default {
    data(){
        return{
            query: '',
        };
    },
    methods: {
        onSearch(){
            this.$emit('search', this.query);

        }
        
    },
    
}
</script>






<style>
    
</style>