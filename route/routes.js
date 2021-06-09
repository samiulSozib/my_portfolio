const authRoute=require('./authRoute')
const dashboardRoute=require('./dashboardRoute')
const projectRoute=require('./projectRoute')
const uploadRoute=require('./uploadRoute')
const userRoute=require('./user/userRoute')
const projectRouter=require('./user/projectRoute')
const portfolioRouter=require('./portfolioRoute')


const routes=[
    {
        path:'/dashboard',
        handler:dashboardRoute
    },
    {
        path:'/admin-auth',
        handler:authRoute
    },
    {
        path:'/project',
        handler:projectRoute
    },
    {
        path:'/uploads',
        handler:uploadRoute
    },
    {
        path:'/project-list',
        handler:projectRouter
    },
    {
        path:'/portfolio',
        handler:portfolioRouter
    },
    {
        path:'/',
        // handler:(req,res)=>{
        //     res.json({
        //         message:'Welcome to my portfolio'
        //     })
        // }
        handler:userRoute
    }
]

module.exports=(app)=>{
    routes.forEach(r=>{
        if(r.path==='/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
}