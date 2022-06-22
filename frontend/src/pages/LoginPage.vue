<template>
  <div>
    <h5 class="text-center">Welcome again, Please login to your account to proceed !</h5>
    <div class="row justify-content-center mt-4">
      <div class="col-md-6">
        <div class="card p-3">
          <div v-if="errors" class="alert alert-danger text-center">
          {{ errors }}
          </div>
          <form @submit.prevent="login">
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input v-model="email" type="email" class="form-control" placeholder="Enter your email">
              <div class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input v-model="password" type="password" class="form-control" placeholder="Enter your password">
            </div>
            <button type="submit" class="btn btn-warning">Login</button>
            <div class="mt-3 ">
              <p>You don't have an account ? <router-link :to="{name: 'RegisterPage'}">Create an account now</router-link> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      errors: ''
    }
  },
  created() {
    if(localStorage.getItem('token')) {
        this.$router.push({ name: 'HomePage' })
    }
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:5000/api/users/login', user)
      .then((res) => {
        if(res.status === 200) {
          localStorage.setItem('token', res.data.token)
          this.$router.push({ name: "HomePage" })
        }
      }, err => {
        console.log(err.response);
        this.errors = err.response.data.message
      }) 
    }
  }
}
</script>

<style scoped>

</style>
