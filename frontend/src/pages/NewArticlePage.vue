<template>
  <div class="bg-light">
    <h3 class="text-center">Create your article</h3>
    <div class="row justify-content-center mt-3">
        <div class="col-md-6">
            <div class="card p-3">
                <form @submit.prevent="onSubmit" enctype="multipart/form-data">
                 <div v-if="errors" class="alert alert-danger text-center">
                    {{ errors }}
                </div>
                <div class="mb-3">
                    <label class="form-label">Title</label>
                    <input v-model="form.title" type="text" class="form-control" >
                </div>
                <div class="mb-3">
                    <label class="form-label">city</label>
                    <input v-model="form.city" type="text" class="form-control" >
                </div>
                <div class="mb-3">
                    <label class="form-label">Description</label>
                    <textarea v-model="form.description" cols="10" rows="5" class="form-control"></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Category</label>
                   <select v-model="form.category" class="form-control">
                    <option v-for="category in categories" :key="category._id" :value="category._id" >{{ category.name }}</option>
                   </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Image</label>
                    <input class="form-control" ref="imageUrl" type="file" @change="onSelect">
                </div>
               <div class="d-grid gap-2 mt-4">
                 <button type="submit" class="btn btn-warning">Save changes</button>
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
    name: "NewArticlePage",
     data() {
        return {
            //isModalVisible: false,
            categories: [],
            errors: '',
            form: {
                imageUrl: '',
                title: "",
                city: "",
                description: "",
                category: "",
            },
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
        onSelect() {
            const file = this.$refs.imageUrl.files[0]
            this.form.imageUrl = file 
        },
         async onSubmit() {  
            const config =  { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`  }}
            const formData = new FormData();
            formData.append('imageUrl', this.form.imageUrl)
            formData.append('title', this.form.title)
            formData.append('city', this.form.city)
            formData.append('category', this.form.category)
            formData.append('description', this.form.description)

            try {
                await axios.post('http://localhost:5000/api/articles', formData, config).then((res) => {
                    console.log(res)
                    this.form = ''
                })
            } catch(err) {
                console.log(err.response);
                this.errors = err.response.data.message
            }
           /* await axios.post(this.endpoint, formData, config)
            .then((res) => {
                console.log(res.data)
            }, err => {
                console.log(err.response)
                this.errors = err.response.data.message
            })*/
        },
    }
}
</script>

<style scoped>

</style>
