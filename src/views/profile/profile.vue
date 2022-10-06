<template>
    <div class="container">
        <Navbar/>
        <Profile msg="Data Profil"/>
    </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Profile from '../../components/Profile.vue'

export default {
  name: 'ProfilePage',
  components: {
    Navbar,
    Profile
  }
}
</script>
