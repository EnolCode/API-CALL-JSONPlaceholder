<script setup>
import UserCard from '../components/UserCard.vue';
import { onBeforeMount } from "vue";
import { useUsersStore } from "@/stores/store.js";
const usersStore = useUsersStore();

onBeforeMount(() => {
  getUsers();
});

const getUsers = async () => {
  await usersStore.fetchUsers();
};


</script>

<template>
    <section>
        <UserCard 
            v-for="user in usersStore.users"
            :key="user.id"
            :user="user"
            />
    </section>
</template>

<style scoped>
    section{
        margin-top: 2em;
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(20em, 1fr) );
        justify-items: center
    }      
</style>