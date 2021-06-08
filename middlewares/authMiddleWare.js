const Admin=require('../model/admin')


exports.bindUserWithRequest=()=>{
    return async (req,res,next)=>{
        if(!req.session.isLoggedIn){
            return next()
        }
        try{

            let admin=await Admin.findById(req.session.admin._id)
            req.admin=admin
            console.log(req.admin)
            next()

        }catch(e){
            console.log(e)
            next(e)
        }
    }
}

exports.isAuthenticated=(req,res,next)=>{
    if(!req.session.isLoggedIn){
        return res.redirect('/admin-auth/signin')
    }

    next()
}

exports.isUnAuthenticated=(req,res,next)=>{
    if(req.session.isLoggedIn){
        return res.redirect('/dashboard')
    }
    next()
}