<template>
    <div class="mt-3">
       <div class="d-flex justify-content-between">
        <h4>Available Articles</h4>
        <!--<button type="button" @click="showModal" class="btn btn-sm btn-warning">New article</button>-->
        <button type="button" @click="toNewArticlePage" class="btn btn-sm btn-warning">New article</button>
       </div>
       <div class="p-3 card mt-3 ">
           <div class="row">
             <div class="col-4 mb-2">
                <div class="card position-relative" style="width: 18rem;">
                    <h6 class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning">Books</h6>
                    <img src="../assets/book.png" class="card-img-top mt-3" alt="...">
                    <div class="card-body">
                        <h6 class="card-text fw-bold">The Guardians of the galaxy </h6>
                        <span style="font-size:small">2 days ago</span>
                        <p style="font-size:small" >by Mourad EL Jayi</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-start">
                            <button class="btn btn-sm btn-secondary"><i class="bi bi-trash"></i></button>
                            <button class="btn btn-sm btn-danger"><i class="bi bi-pencil-square"></i></button>
                        </div>
                        
                    </div>
                </div>
           </div>
           
           </div>
                
       </div>
       <!--
        <ModalBox 
        v-show="isModalVisible"
        @close="closeModal">
        <template v-slot:title>
            Create a new article
        </template>
        <template v-slot:body>
            <form @submit.prevent="onSubmit" >
                 <div v-if="errors" class="alert alert-danger text-center">
                    {{ errors }}
                </div>
                <div class="mb-3">
                    <label class="form-label">Title</label>
                    <input v-model="title" type="text" class="form-control" >
                </div>
                <div class="mb-3">
                    <label class="form-label">city</label>
                    <input v-model="city" type="text" class="form-control" >
                </div>
                <div class="mb-3">
                    <label class="form-label">Description</label>
                    <textarea v-model="description" cols="10" rows="5" class="form-control"></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Category</label>
                   <select v-model="category" class="form-control">
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
        </template>
        </ModalBox>
        -->
       
    </div>
</template>

<script>

export default {
   methods: {
    toNewArticlePage() {
        this.$router.push({ name: "NewArticlePage" })
    }
   }
}
</script>

<style scoped>
</style>