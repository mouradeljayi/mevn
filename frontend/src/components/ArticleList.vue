<template>
    <div>
        <div class="input-group mb-3">
            <input type="text" v-model="search" class="form-control form-control" placeholder="Search for articles here">
            <button type="submit" class="input-group-text btn-success"><i class="bi bi-search me-2"></i> </button>
        </div>
       <div class="d-flex justify-content-between">
        <h4>Available Articles</h4>
        <!--<button type="button" @click="showModal" class="btn btn-sm btn-warning">New article</button>-->
        <button type="button" @click="toNewArticlePage" class="btn btn-sm btn-warning">New article</button>
       </div>
       <div class="p-3 card mt-3 ">
           <div class="row">
             <div v-for="article in searchArticles()" :key="article._id" class="col-4 mb-4">
                <div class="card position-relative" style="width: 18rem;">
                    <h6 class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning">{{ categoryById(article.category).name }}</h6>
                    <img :src="`http://localhost:5000/${article.imageUrl}`" class="card-img-top mt-3" alt="{{ article.title }}">
                    <div class="card-body">
                        <h6 class="card-text fw-bold">{{ article.title }} </h6>
                        <AppDate :timestamp="article.createdAt" />
                       
                       <div style="font-size:small" class="d-grid gap-2 d-sm-flex justify-content-sm-start">
                         <p>by {{ userById(article.user).name }} |</p> 
                         <p class="fw-bold text-info">{{ article.city }}</p>
                       </div>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-start">
                            <button @click="showModal()" class="btn btn-sm btn-secondary"><i class="bi bi-trash"></i></button>
                            <button class="btn btn-sm btn-danger"><i class="bi bi-pencil-square"></i></button>
                        </div>
                        
                    </div>
                </div>
           </div>
           
           </div>
           <div  v-if="search && !searchArticles().length">
                 No results for "{{ search }}"
            </div>   
       </div>
       
        <ModalBox 
        v-show="isModalVisible"
        @close="closeModal">
        <template v-slot:title>
          
        </template>
        <template v-slot:body>
            
        </template>
        </ModalBox>
        
       
    </div>
</template>

<script>
import axios from 'axios'
import AppDate from '@/components/AppDate'
import ModalBox from '@/components/ModalBox'
export default {
    components: { AppDate, ModalBox },
    data() {
        return {
            isModalVisible: false,
            articles: [],
            users: [],
            search : '',
            categories: [],
            article: {}
        }
    },
    mounted() {
        axios.get('http://localhost:5000/api/articles', {
             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` 
             }})
        .then(res => {
            this.articles = res.data
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        }),
        axios.get('http://localhost:5000/api/categories', {
             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` 
             }})
        .then(res => {
            this.categories = res.data
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        }),
        axios.get('http://localhost:5000/api/users/all', {
             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` 
             }})
        .then(res => {
            this.users = res.data
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },
   methods: {
     showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
    toNewArticlePage() {
        this.$router.push({ name: "NewArticlePage" })
    },
    userById(userId) {
        return this.users.find(a => a._id === userId)
    },
    categoryById(categoryId) {
        return this.categories.find(a => a._id === categoryId)
    },
    searchArticles() {
        return this.articles.filter(a => {
        return a.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
    
   }
}
</script>

<style scoped>
</style>