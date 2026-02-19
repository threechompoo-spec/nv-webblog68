<template>
  <div class="container">
    <h1>Create Blog</h1>
    <form v-on:submit.prevent="createBlog">
      <div class="mb-3">
        <label class="form-label">Title:</label>
        <input type="text" v-model="blog.title" class="form-control" placeholder="Enter blog title">
      </div>
      
      <upload-image @uploaded="onUploaded"></upload-image> 

      <div class="mb-3 editor-wrapper mt-3">
        <label class="form-label">Content:</label>
        <ckeditor :editor="editor" v-model="blog.content" :config="editorConfig"></ckeditor>
      </div>

      <div class="mb-3">
        <label class="form-label">Category:</label>
        <input type="text" v-model="blog.category" class="form-control">
      </div>
      
      <div class="mb-3">
        <label class="form-label">Status:</label>
        <input type="text" v-model="blog.status" class="form-control">
      </div>
      
      <button type="submit" class="btn btn-primary">Create Blog</button>
    </form>
  </div>
</template>

<script>
import BlogsService from '../../services/BlogsService'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import UploadImage from '../Utils/Upload.vue' // [เพิ่ม] 2. Import Component เข้ามา [cite: 333]

export default {
  components: {
    UploadImage // [เพิ่ม] 3. ลงทะเบียน Component ให้ Template รู้จัก [cite: 335-336]
  },
  data () {
    return {
      editor: ClassicEditor,
      editorConfig: {
        licenseKey: 'GPL',
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ]
      },
      blog: {
        title: '',
        thumbnail: 'null', // ข้อมูลชื่อไฟล์รูปจะถูกนำมาเก็บไว้ที่นี่ [cite: 348-349]
        pictures: 'null',
        content: '',
        category: '',
        status: 'saved'
      }
    }
  },
  methods: {
    // [เพิ่ม] 4. ฟังก์ชันรับชื่อไฟล์จาก Component ลูก (Upload.vue) มาเก็บใน blog.thumbnail [cite: 358-362]
    onUploaded (filename) {
      this.blog.thumbnail = filename
      console.log('Thumbnail set to:', filename)
    },
    async createBlog () {
      try {
        await BlogsService.post(this.blog)
        this.$router.push({ name: 'blogs' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.editor-wrapper {
    text-align: left;
}
:deep(.ck-editor__editable) {
    min-height: 300px;
}
</style>