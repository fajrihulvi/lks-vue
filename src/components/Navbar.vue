<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Belajar VUE JS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/profile">Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" @click="logout">Logout</a>
            </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
  name: "NavBar",
  props: {

  },
  setup() {
        //vue router
        const router = useRouter()

        //method logout
        function logout() {
            axios.post('http://127.0.0.1:8000/api/logout', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            }).then(() => {
                //redirect ke 
                alert("Berhasil Logout")
                router.push({
                    name: 'auth.login'
                }) 
                localStorage.removeItem('access_token');
            }).catch(error => {
                //assign state validation with error 
                alert(error.response.data.message)
            })
        }

        //return
        return {
            router,
            logout
        }

    }
};
</script>