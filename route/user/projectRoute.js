const router=require('express').Router()
const {getProjectpageController,getSingleProject}=require('../../controller/user/projectController')

router.get('/:categoryId',getProjectpageController)
router.get('/details/:projectId',getSingleProject)

module.exports=router