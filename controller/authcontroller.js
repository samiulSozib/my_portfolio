
const bcrypt=require('bcrypt')
const Admin=require('../model/admin')
const {validationResult}=require('express-validator')
const errorFormatter=require('../utils/validationErrorFormatter')

exports.signupGetController=(req,res,next)=>{
    res.render('admin/pages/auth/signup',{
        title:'SignUp Admin',
        error:{},
        value:{}
    })
}

exports.signupPostController=async(req,res,next)=>{
    let {username,email,password,confirmPassword}=req.body

    let errors=validationResult(req).formatWith(errorFormatter)
    if(!errors.isEmpty()){
        return res.render('admin/pages/auth/signup',{
            title:'SignUp Admin',
            error:errors.mapped(),
            value:{username,email}
        })
    }

    try{

        let hashPassword=await bcrypt.hash(password,11)
        let admin=new Admin({
            username,
            email,
            password:hashPassword
        })

        let createdAdmin=await admin.save()
        return res.redirect('/auth/signin')

    }catch(e){
        next(e)
        console.log(e)
    }
}

exports.signinGetController=(req,res,next)=>{
    res.render('admin/pages/auth/signin',
    {
        title:'Signin Admin',
        error:{}
    })
}

exports.signinPostContrtoller=async(req,res,next)=>{
    let {email,password}=req.body
    let errors=validationResult(req).formatWith(errorFormatter)
    if(!errors.isEmpty()){
        return res.render('admin/pages/auth/signin',{
            title:'Signin Admin',
            error:errors.mapped()
        })
    }

    try{
        let admin=await Admin.find({email:req.body.email})
        if(!admin){
            return res.status(401).json({
                message:'Authentication fail'
            })
        }
        const isValidatePassword=await bcrypt.compare(req.body.password,admin[0].password)
        if(!isValidatePassword){
            return res.status(401).json({
                message:'Authentication fail'
            })
        }

        req.session.isLoggedIn=true
        req.session.admin=admin
        req.session.save(error=>{
            if(error){
                console.log(error)
                return next(error)
            }
            return res.redirect('/dashboard')
        })


    }catch(e){
        console.log(e)
        next(e)
    }
}
exports.signoutController=(req,res,next)=>{
    req.session.destroy(error=>{
        if(error){
            console.log(error)
            return newxt(eror)
        }

        res.redirect('/admin-auth/signin')
    })
}