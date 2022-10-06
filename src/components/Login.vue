<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h1>{{ msg }}</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="post.email"
              placeholder="Masukkan Email"
            />
             <div v-if="validation.email" class="mt-2 alert alert-danger">
                {{ validation.email[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="post.password"
              placeholder="Masukkan Password"
            />
             <div v-if="validation.password" class="mt-2 alert alert-danger">
                {{ validation.password[0] }}
            </div>
          </div>
          <br/>
          <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>
        <br/>
        <a href="/register">Daftar Disini</a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
    name: 'LoginPage',
    props: {
        msg : String,
    },
    setup() {
        //state posts
        const post = reactive({
            email: '',
            password: '',
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function login() {            
            let email = post.email
            let password = post.password
            axios.post('http://127.0.0.1:8000/api/login', {
                email: email,
                password: password,
            }).then(response => {
                //redirect ke 
                localStorage.setItem('access_token', response.data.access_token);
                router.push({
                    name: 'user.dashboard'
                }) 
            }).catch(error => {
                //assign state validation with error 
                alert(error.response.data.message)
            })
        }

        //return
        return {
            post,
            validation,
            router,
            login
        }

    }

}
</script>