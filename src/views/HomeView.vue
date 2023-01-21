<script setup>
import { ref, reactive, onBeforeMount, onErrorCaptured, onMounted } from "vue";
import UserCard from '../components/UserCard.vue';
import ApiRepository from "../ApiRepositories/ApiRepository";

let characters = ref([])

onBeforeMount(async () => {
const repository = new ApiRepository("jsonholder");
// const api = repository;
characters.value = await repository.getAll();
})
</script>

<template>
    <section>
        <UserCard 
            v-for="character in characters"
            :key="character.id"
            :character="character"
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