const router=require('express').Router()
const {createProjectGetController,createProjectPostController}=require('../controller/projectController')
const {isAuthenticated}=require('../middlewares/authMiddleWare')
const upload=require('../middlewares/uploadMiddleware')
const projectValidator=require('../validator/dashboard/project/createProjectValidator')

router.get('/create-project',isAuthenticated,createProjectGetController)
router.post('/create-project',isAuthenticated,upload.single('project-thumbnail'),projectValidator,createProjectPostController)

module.exports=router