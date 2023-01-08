<script setup>
import {ref} from "vue"
import { useUserSearchStore } from "@/stores/storeSearch.js"
const userStore = useUserSearchStore();

const props = defineProps({
   user:{
      type: Object
   }
})

</script>

<template>
 <div class="user-card">
   <p class="user-card__data"><span class="bold">ID:</span>  {{ user.id }}</p>
   <p class="user-card__data"><span class="bold" >Name:</span> {{ user.name }}</p>
   <p class="user-card__data"><span class="bold" >UserName:</span> {{ user.username }}</p>
   <p class="user-card__data"><span class="bold">City:</span> {{ user.address.city }}</p>
 </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/colors" as c;
   .user-card{
    width: 15em;
    min-height: 10em;
    background: map-get(c.$colors, "beige");
    border-radius: 10px;
    margin: 1em;
    padding:  .2em .5em;

    &__data{
      margin: 1em;
    }
   }
   .bold{
      font-weight: bold;
   }

   
</style>
