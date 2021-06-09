const router=require('express').Router()
const {getPortfolioController,getEditPortfolioController,updateEditPortfolioController}=require('../controller/portfolio_controller')
const {isAuthenticated}=require('../middlewares/authMiddleWare')

router.get('/',isAuthenticated,getPortfolioController)
router.get('/update-details/:detailsId',isAuthenticated,getEditPortfolioController)


// router.post('/update-details',isAuthenticated,postEditPortfolioController)

router.post('/update-details/:detailsId',isAuthenticated,updateEditPortfolioController)

module.exports=router