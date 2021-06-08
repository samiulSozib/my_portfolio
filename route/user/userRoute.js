const router=require('express').Router()
const {getHomepageController}=require('../../controller/user/hompageController')

router.get('/',getHomepageController)
// router.post('/',(req,res)=>{
//     console.log("fdsfdfsd")
// })


module.exports=router