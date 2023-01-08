<script setup>
import PersonSearch from '../components/PersonSearch.vue';
import { reactive, computed,ref,onBeforeMount } from 'vue';

import { useUsersStore} from "@/stores/store.js";
import UserCard from '../components/UserCard.vue';
const usersStore = useUsersStore();
// let newArr = reactive({})
// const newArr2 = computed(()=> newArr = newArr2 )
onBeforeMount(() => {
  getUsers();
});
let newArr = []
const getUsers = async (data) => {
  await usersStore.fetchUsers();
  let userId = data
  newArr = usersStore.users.find(el => el.id === userId)
  return newArr
}

setTimeout(() => {
  console.log(newArr);
}, 5000)
  </script>

<template>
    <div class="person">
        <PersonSearch @send-id="getUsers" />
    </div>
    <main>
      <h1>HOLA</h1>
      <h3>{{ newArr }}</h3>
        <UserCard 
            v-for="user in newArr"
            :key="user.id"
            :user="user"
            />
    </main>

</template>

<style scoped>

.person{
  margin: 2em auto;

}
main{
        margin-top: 2em;
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(20em, 1fr) );
        justify-items: center
}
</style>