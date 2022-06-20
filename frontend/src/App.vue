<template>
  <div class="container mb-4">
    <div class="text-center">
      <img alt="Vue logo" src="./assets/logo.png" width="300">
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
#app {
  font-family: 'Montserrat', sans-serif;
  margin-top: 50px;
}
</style>
