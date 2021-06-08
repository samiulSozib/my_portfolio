const router=require('express').Router()
const signupvalidator=require('../validator/auth/signupvalidator')
const signinvalidator=require('../validator/auth/signinvalidator')
const {signupGetController,signupPostController,signinGetController,signinPostContrtoller,signoutController}=require('../controller/authcontroller')
const {isUnAuthenticated}=require('../middlewares/authMiddleWare')

router.get('/signup',isUnAuthenticated,signupGetController)
router.post('/signup',isUnAuthenticated,signupvalidator,signupPostController)

router.get('/signin',isUnAuthenticated,signinGetController)
router.post('/signin',isUnAuthenticated,signinvalidator,signinPostContrtoller)
router.get('/signout',signoutController)

module.exports=router