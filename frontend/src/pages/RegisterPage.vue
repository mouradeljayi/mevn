<template>
  <div>
    <h5 class="text-center">Create a new account</h5>
    <div class="row justify-content-center mt-4">
      <div class="col-md-6">
        <div class="card p-3">
          <div v-if="errors" class="alert alert-danger text-center">
          {{ errors }}
          </div>
          <form @submit.prevent="signUp">
            <div class="mb-3">
              <label class="form-label">Username</label>
              <input v-model="form.name" type="text" class="form-control" placeholder="Enter your name">
            </div>
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input v-model="form.email" type="email" class="form-control" placeholder="Enter a valid email">
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input v-model="form.password" type="password" class="form-control" placeholder="Enter a new password">
            </div>
            <div class="mb-3">
              <label class="form-label">Confirm Password</label>
              <input v-model="form.password_confirmation" type="password" class="form-control" placeholder="Confirm your password">
            </div>
            <button type="submit" class="btn btn-warning">Register</button>
            <div class="mt-3 ">
              <p>You already have an account ?  <router-link :to="{ name:'LoginPage' }">Login in to your account</router-link> </p>
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
  name: 'RegisterPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: ""
    }
  },
  
  methods: {
   signUp() {
    if(this.form.password !== this.form.password_confirmation) {
      this.errors = "Please confirm your password"
    } else {
        axios.post('http://localhost:5000/api/users', this.form)
      .then(() => {
        this.$router.push("/")
      }, err => {
        console.log(err.response)
        this.errors = err.response.data.message
      })
    }
    
   }
  }
}
</script>

<style scoped>

</style>
