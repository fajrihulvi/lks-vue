<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h1>{{ msg }}</h1>
        <form @submit.prevent="store">
          <div class="form-group">
            <label for="name">Nama</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="post.name"
              placeholder="Masukkan Nama"
            />
            <div v-if="validation.name" class="mt-2 alert alert-danger">
                {{ validation.name[0] }}
            </div>
          </div>
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
          <button type="submit" class="btn btn-primary btn-block">Daftar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
    name: 'RegisterPage',
    props: {
        msg : String,
    },
    setup() {
        //state posts
        const post = reactive({
            name: '',
            email: '',
            password: '',
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function store() {            
            let name   = post.name
            let email = post.email
            let password = post.password

            axios.post('http://127.0.0.1:8000/api/register', {
                name: name,
                email: email,
                password: password,
            }).then(response => {
                //redirect
                if(response.status == 200){
                    alert("Berhasil Menyimpan Data")
                    router.push({
                        name: 'auth.login'
                    }) 
                } else {
                    alert("Gagal Menyimpan Data")
                }
                
            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })
        }

        //return
        return {
            post,
            validation,
            router,
            store
        }

    }

}
</script>