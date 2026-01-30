<template>
  <div>
    <h1>Show User</h1>
    <div v-if="user">
      <p>id: {{ user.id }}</p>
      <p>ชื่อ-นามสกุล: {{ user.name }} - {{ user.lastname }}</p>
      <p>email: {{ user.email }}</p>
      <p>password: {{ user.password }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      user: null
    }
  },
  async created () {
    let userId = this.$route.params.userId
    const response = await axios.get('http://localhost:8081/user/' + userId)
    this.user = response.data
  }
}
</script>
