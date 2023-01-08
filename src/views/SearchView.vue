<script setup>
import { reactive, computed,ref,onBeforeMount } from 'vue';

import { useUsersStore} from "@/stores/store.js";
import UserCard from '../components/UserCard.vue';
const usersStore = useUsersStore();
onBeforeMount(() => {
  getUsers();
});
const props = defineProps({
   user:{
      type: Object
   }
})

  const getUsers = async (data) => {
    await usersStore.fetchUsers();
}

let userIdInput = ref("")
let newArr = reactive([])

const getId = () =>{
  let userId = userIdInput.value
  userIdInput.value = ""
  newArr = usersStore.users.find(el => el.id === userId)
}

</script>

<template>
    
      <div class="search">
      <div class="search__div">
      <label class="search__title" for="search">Enter ID User (1-10)</label>  
      <div class="search__div2">
      <input class="search__input" type="number"  min="1" max="10" id="search" v-model="userIdInput">
      <button @click="getId" class="search__button" type="submit"> Search</button>
    </div>
      </div>
      <div class="search__person" >
        <p>Name: {{ newArr.name  }}</p>
        <p>UserName: {{ newArr.username  }}</p>
        <p>Email: {{ newArr.email  }}</p>
        <p>Phone: {{ newArr.phone  }}</p>
      </div>
    </div>

    

</template>


<style scoped lang="scss">
@use "@/assets/scss/colors" as c;

  
    .search{
        margin: 2em auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        border-radius: 5px;
        
        &__div{
        height: 5em;
        width: 15em;
        background:grey;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    
      }

      &__div2{
        display:flex;
        gap: 2em;
      }

        &__title {
            font-size: 1.3em;
        }
    
        &__input{
            outline: 1px solid black;
            padding: 0 .5em;
            justify-content: center;
            align-items: center;
        }

        &__button{
            background: map-get(c.$colors, "grey");
            cursor: pointer;
            padding:  .4em.8em;
            border-radius: 5px;
            color:white;
            width: 70%;

            &:hover{
                opacity: .8;
            }
        }
        &__person{
          background: antiquewhite;
          width: 18em;
          height: 10em;
          display: flex;
          flex-direction: column;
          gap:.5em;
          padding: 1em;
        }
    }

</style>