const Project=require('../model/project')
const {validationResult}=require('express-validator')
const errorFormatter=require('../utils/validationErrorFormatter')

exports.createProjectGetController=async(req,res,next)=>{
    res.render('admin/pages/dashboard/project/create-project',
    {
        title:'Create-Project',
        error:{}
    })
}

exports.createProjectPostController=async(req,res,next)=>{
    let {title,body,customIndex,category,liveShow,githubLink}=req.body
    //console.log(title,body,liveShow,githubLink)
    let errors=validationResult(req).formatWith(errorFormatter)
    if(!errors.isEmpty()){
        console.log(errors.mapped())
        return res.render('admin/pages/dashboard/project/create-project',
        {
            title:'Create Project',
            error:errors.mapped(),
            
        })
    }

    let project=new Project({
        title,
        body,
        customIndex,
        category,
        thumbnail:'',
        links:{
            liveShow:liveShow||'',
            githubLink:githubLink||''
        },
        comments:[]
    })

    if(req.file){
        project.thumbnail=`/uploads/${req.file.filename}`
    }

    //console.log(project)

    try{

        let createdProject=await project.save()
        if(createdProject){
            return res.redirect('/dashboard')
        }else{
            return res.redirect('/dashboard')
        }

    }catch(e){
        next(e)
        console.log(e)
    }
} 

exports.editProjectGetController=async(req,res,next)=>{
    let projectId=req.params.projectId

    try{
        let project=await Project.findOne({_id:projectId})

        if(!project){
            return res.json({
                error:'There Is No Project Availavle'
            })
        }

        return res.render('admin/pages/dashboard/project/edit-project',{
            title:'Edit Project',
            error:{},
            project
        })
 
    }catch(e){
        console.log(e)
        next(e)
    }
}

exports.editProjectPostController=async(req,res,next)=>{
    let projectId=req.params.projectId
    let {title,body,customIndex,category,liveShow,githubLink}=req.body

    let errors=validationResult(req).formatWith(errorFormatter)

    try{
        let project= await Project.findOne({_id:projectId})

        if(!project){
            return res.json({
                error:"There is no project available"
            })
        }

        if(!errors.isEmpty()){
            return res.render('admin/pages/dashboard/project/edit-project',{
                title:'Edit Project',
                error:errors.mapped(),
                project
            })
        }

        let thumbnail=project.thumbnail

        if(req.file){
            thumbnail=`/uploads/${req.file.filename}`
        }
        await Project.findOneAndUpdate(
            {_id:projectId},
            {$set:{title,body,customIndex,category,liveShow,githubLink,thumbnail}},
            {new:true}
        )

        return res.redirect('/dashboard')

    }catch(e){
        console.log(e)
        next(e)
    }

}

exports.getDeleteProjectController=async(req,res,next)=>{
    let projectId=req.params.projectId

    try{
        let project=await Project.findOne({_id:projectId})

        if(!project){
            return res.json({
                error:"Something Error"
            })
        }

        await Project.findOneAndDelete({_id:projectId})
        return res.redirect('/dashboard')

    }catch(e){
        console.log(e)
        next(e)
    }
}