<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h1>{{ msg }}</h1>
        <table class="table">
          <tbody>
            <tr>
              <th>Nama</th>
              <td>{{ posts.name }}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{{ posts.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {
  name: "ProfilePage",
  props: {
    msg: String,
  },
  setup() {
    //reactive state
    let posts = ref([]);

    //mounted
    onMounted(() => {
      //get API from Laravel Backend
      axios
        .get("http://127.0.0.1:8000/api/profile",{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then((response) => {
          //assign state posts with response data
          posts.value = response.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });

    //return
    return {
      posts,
    };
  },
};
</script>