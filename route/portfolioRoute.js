const router=require('express').Router()
const {getPortfolioController,getEditPortfolioController,postEditPortfolioController}=require('../controller/portfolio_controller')
const {isAuthenticated}=require('../middlewares/authMiddleWare')

router.get('/',isAuthenticated,getPortfolioController)
router.get('/update-details',isAuthenticated,getEditPortfolioController)


router.post('/update-details',isAuthenticated,postEditPortfolioController)

module.exports=router