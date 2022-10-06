<template>
    <div class="container">
        <Navbar/>
        <Dashboard msg="Dashboard - Data Customer"/>
    </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Dashboard from '../../components/Dashboard.vue'

export default {
  name: 'ProfilePage',
  components: {
    Navbar,
    Dashboard
  }
}
</script>
