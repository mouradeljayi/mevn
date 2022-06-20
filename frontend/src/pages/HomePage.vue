<template>
  <div>
    <h1>Home page</h1>
  </div>
  
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
        user: null,
    }
  },
  created() {
    if(localStorage.getItem('token') === null) {
        this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
