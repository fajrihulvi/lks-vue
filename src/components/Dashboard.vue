<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h1>{{ msg }}</h1>
        <table class="table">
          <thead>
            <tr>
                <th>No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Telepon</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(customer, index) in customers" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ customer.first_name }}</td>
              <td>{{ customer.last_name }}</td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.phone }}</td>
              <td>
        
              </td>
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
  name: "CustomerPage",
  props: {
    msg: String,
  },
  setup() {
    //reactive state
    let customers = ref([]);

    //mounted
    onMounted(() => {
      //get API from Laravel Backend
      axios
        .get("http://127.0.0.1:8000/api/customer",{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then((response) => {
          //assign state customers with response data
          customers.value = response.data.data
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });

    //return
    return {
      customers,
    };
  },
};
</script>