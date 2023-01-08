<script setup>
import {ref, onBeforeMount} from "vue"

import { useUsersStore } from "@/stores/store.js";
const usersStore = useUsersStore();

onBeforeMount(() => {
  getUsers();
});

const getUsers = async (userId) => {
  await usersStore.fetchUsers();
};


let userIdInput = ref("")

const emit = defineEmits(["sendId"]);

const sendId = async () => {
   let userId = userIdInput.value
   userIdInput.value = ""
	emit("sendId", userId);
};


</script>

<template>
    <div class="search">
     <label class="search__title" for="search">Enter ID User (1-10)</label>  
     <div class="search__div">
     <input class="search__input" type="number"  min="1" max="10" id="search" v-model="userIdInput">
     <button @click="sendId" class="search__button" type="submit">Search</button>
    </div>
    </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/colors" as c;

    .search{
        width: 15em;
        height: 5em;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        // background:red;

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
            padding: .2em;
            border-radius: 5px;
            color:white;
            width: 50%;

            &:hover{
                opacity: .8;
            }
        }
    }

    .search__div{
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
</style>