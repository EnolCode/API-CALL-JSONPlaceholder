<script setup>
import UserCard from './components/UserCard.vue'
</script>

<template>
<main>
    <nav class="header__nav">
      <router-link to="/" class="nav__link" href="">Home</router-link>
      <router-link to="/search" class="nav__link" href="">Search</router-link>
    </nav>
    <RouterView />
  </main>
</template>

<style scoped>
main{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header__nav{
  align-self: center;
  display: flex;
  width: 10em;
  justify-content: space-around;
  align-content: center;
  margin-top: 2em;
}
.router-link-exact-active {
  font-weight: bold;
}
</style>
