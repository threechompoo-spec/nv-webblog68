<template>
  <div>
    <h1>Edit User</h1>

    <form @submit.prevent="editUser">
      <p>
        name:
        <input type="text" v-model="user.name" required>
      </p>

      <p>
        lastname:
        <input type="text" v-model="user.lastname" required>
      </p>

      <p>
        email:
        <input type="email" v-model="user.email" required>
      </p>

      <p>
        password:
        <input type="text" v-model="user.password" required>
      </p>

      <p>
        <button type="submit">อัปเดต</button>
        <button type="button" @click="goBack">ยกเลิก</button>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      user: {
        id: null,
        name: '',
        lastname: '',
        email: '',
        password: '',
        status: 'active'
      }
    }
  },
  async created () {
    try {
      let userId = this.$route.params.userId
      const response = await axios.get('http://localhost:8081/user/' + userId)
      this.user = response.data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async editUser () {
      try {
        await axios.put('http://localhost:8081/user/' + this.user.id, this.user)
        this.$router.push('/users')
      } catch (err) {
        console.log(err)
      }
    },
    goBack () {
      this.$router.push('/users')
    }
  }
}
</script>

<style scoped>
</style>
