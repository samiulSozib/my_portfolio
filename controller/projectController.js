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