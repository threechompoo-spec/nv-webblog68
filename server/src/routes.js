const isAuthenController = require('./controllers/isAuthenController')
const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const BlogController = require('./controllers/BlogController')

// 1. เอา // ออก เพื่อดึง Controller และ Middleware เข้ามาใช้งาน [cite: 224-225]
const UploadController = require('./controllers/UploadController')
const fileUploadMiddleware = require('./middleware/fileUpload') 

module.exports = (app) => {
  // เส้นทางใหม่สำหรับ User Management แบบ MVC
  app.get('/users', isAuthenController, UserController.index)
  app.post('/user', UserController.create)
  app.put('/user/:userId', UserController.put)
  app.delete('/user/:userId', UserController.remove)
  app.get('/user/:userId', UserController.show)
  app.post('/login', UserAuthenController.login)
  app.post('/register', UserAuthenController.register)
  
  // blog route
  // create blog
  app.post('/blog', BlogController.create)

  // edit blog, suspend, active
  app.put('/blog/:blogId', BlogController.put)

  // delete blog
  app.delete('/blog/:blogId', BlogController.remove)

  // get blog by id
  app.get('/blog/:blogId', BlogController.show)

  // get all blog
  app.get('/blogs', BlogController.index)
  
  // Route สำหรับ Upload โดยเฉพาะ
  // 2. เอา // ออก เพื่อเปิดเส้นทางรับไฟล์ [cite: 230-232]
  // logic: เรียก middleware ก่อน -> ถ้าผ่าน -> เรียก controller
  app.post('/upload', fileUploadMiddleware, UploadController.upload)
}