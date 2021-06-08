const route=require('express').Router()

const {isAuthenticated}=require('../middlewares/authMiddleWare')
const upload=require('../middlewares/uploadMiddleware')
const {projectImageUploadController}=require('../controller/uploadController')


route.post('/projectimage',isAuthenticated,upload.single('project-image'),projectImageUploadController)

module.exports=route