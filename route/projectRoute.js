const router=require('express').Router()
const {createProjectGetController,createProjectPostController,editProjectGetController,editProjectPostController,getDeleteProjectController}=require('../controller/projectController')
const {isAuthenticated}=require('../middlewares/authMiddleWare')
const upload=require('../middlewares/uploadMiddleware')
const projectValidator=require('../validator/dashboard/project/createProjectValidator')

router.get('/create-project',isAuthenticated,createProjectGetController)
router.post('/create-project',isAuthenticated,upload.single('project-thumbnail'),projectValidator,createProjectPostController)


router.get('/edit-project/:projectId',isAuthenticated,editProjectGetController)
router.post('/edit-project/:projectId',isAuthenticated,upload.single('project-thumbnail'),projectValidator,editProjectPostController)


router.get('/delete-project/:projectId',isAuthenticated,getDeleteProjectController)


module.exports=router