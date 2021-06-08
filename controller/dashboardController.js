const Project=require('../model/project')

exports.getDashboardController=async(req,res,next)=>{

    try{

        let projectList=await Project.find()
        //console.log(projectList)
        return res.render('admin/pages/dashboard/dashboard',{
            title:'Dashboard',
            project:projectList
        })

    }catch(e){
        next(e)
        console.log(e)
    }

    
}