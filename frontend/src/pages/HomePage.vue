<template>
  <div>
    <div class="row">
       <CategoryBar @logout="onLogout"/>
       <div class="col-sm min-vh-100">
            <div v-if="this.$route.params.message" class="alert alert-success">
            {{ this.$route.params.message }}
            </div>
            <ArticleList/>
        </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'
import CategoryBar from '@/components/CategoryBar.vue'
import ArticleList from '@/components/ArticleList.vue';

export default {
    name: "HomePage",
    data() {
        return {
            username: "",
        };
    },
    created() {
        if (localStorage.getItem("token") === null) {
            this.$router.push("/");
        }
    },
    mounted() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
        axios.get("http://localhost:5000/api/users/me")
            .then(res => {
            this.username = res.data.name;
        });
    },
    methods: {
        onLogout() {
            localStorage.clear();
            this.$router.push("/");
        }
    },
    components: { CategoryBar, ArticleList }
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");
</style>
