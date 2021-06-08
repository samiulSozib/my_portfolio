const router=require('express').Router()
const {getDashboardController}=require('../controller/dashboardController')
const {isAuthenticated}=require('../middlewares/authMiddleWare')



router.get('/',isAuthenticated,getDashboardController)


module.exports=router