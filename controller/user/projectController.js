const Project=require('../../model/project')

exports.getProjectpageController=async(req,res,next)=>{
    let categoryId=req.params.categoryId
    let project;
    try{
        if(categoryId=="all"){
            project=await Project.find()
        }else{
            project=await Project.find({category:categoryId})
        }
        //let project=await Project.find()
        console.log(project)
        res.render('user/pages/project_list',{project})

    }catch(e){
        next(e)
        console.log(e)
    }
}

exports.getSingleProject=async(req,res,next)=>{
    let projectId=req.params.projectId

    try{

        let project=await Project.findById(projectId)
        if(!project){
            console.log("no project")
        }
        console.log(project)
        res.render('user/pages/single_project',{project})
        
    }catch(e){
        next(e)
        console.log(e)
    }

    //res.render('user/pages/single_project')
}