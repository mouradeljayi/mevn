<template>
    <div class="col-sm-auto sticky-top">
            <div class="d-flex flex-sm-column flex-row flex-nowrap border align-items-center sticky-top">
                <a href="/" class="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    
                   <img alt="Vue logo" src="../assets/logo.png" width="140">

                </a>
                <ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                    <li v-for="category in categories" :key="category.id">
                        <a href="#" class="nav-link" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <i :class="'fs-1 bi bi-'+ category.icon"></i>
                            <p>{{ category.name }}</p>
                        </a>
                    </li>
                </ul>
                <div class="dropdown">
                    <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi-person-circle h2"></i>
                    </a>
                    <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li ><a @click="logout" class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            categories: [],
        }
    },
    mounted() {
        axios.get('http://localhost:5000/api/categories', {
             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` 
             }})
        .then(res => {
            this.categories = res.data
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },
    methods: {
        logout() {
            this.$emit('logout')
        }
    }
}
</script>

<style scoped>
ul li a {
  color: black;
}
a:hover {
    color: orange;
}
</style>