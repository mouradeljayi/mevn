<template>
    <div class="mt-3">
       <div class="d-flex justify-content-between">
        <h4>Available Articles</h4>
        <button class="btn btn-sm btn-warning">New article</button>
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
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
</style>