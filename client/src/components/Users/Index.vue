<template>
  <div>
    <h1>Get All Users</h1>

    <!-- ปุ่มเพิ่มผู้ใช้ -->
    <p>
      <button @click="navigateTo('/user/create')">
        เพิ่มผู้ใช้
      </button>
    </p>

    <h4>จำนวนผู้ใช้งาน {{ users.length }}</h4>

    <div v-for="user in users" :key="user.id">
      <p>id: {{ user.id }}</p>
      <p>ชื่อ-นามสกุล: {{ user.name }} - {{ user.lastname }}</p>
      <p>email: {{ user.email }}</p>
      <p>password: {{ user.password }}</p>

      <p>
        <button @click="navigateTo('/user/' + user.id)">ดูข้อมูลผู้ใช้</button>
        <button @click="navigateTo('/user/edit/' + user.id)">แก้ไขข้อมูล</button>
        <button @click="deleteUser(user)">ลบข้อมูล</button>
      </p>

      <hr>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      users: []
    }
  },
  async created () {
    console.log("Component ถูกโหลดแล้ว (Index.vue)")
    this.refreshData()
  },
  methods: {
    navigateTo (route) {
      console.log("กำลังไปที่:", route)
      this.$router.push(route)
    },

    async refreshData () {
      try {
        console.log("กำลังโหลดข้อมูล users...")
        const response = await axios.get('http://localhost:8081/users')
        console.log("ข้อมูลจาก server =", response.data)
        this.users = response.data
      } catch (error) {
        console.log("ERROR โหลด users =", error)
      }
    },

    async deleteUser (user) {
      console.log("กดลบ user =", user)

      let result = confirm("ต้องการลบข้อมูลผู้ใช้นี้หรือไม่?")
      if (result) {
        try {
          console.log("กำลังลบ user id =", user.id)
          await axios.delete('http://localhost:8081/user/' + user.id)
          console.log("ลบสำเร็จแล้ว")
          this.refreshData()
        } catch (err) {
          console.log("ERROR ตอนลบ =", err)
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
