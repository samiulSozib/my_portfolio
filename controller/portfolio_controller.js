exports.getPortfolioController=async(req,res,next)=>{
    return res.render('admin/pages/dashboard/portfolio/dashboard',{title:'Portfolio Details'})
}
exports.getEditPortfolioController=async(req,res,next)=>{
    return res.render('admin/pages/dashboard/portfolio/details',{title:'Portfolio Details'})
}

exports.postEditPortfolioController=async(req,res,next)=>{
    let {nav_title,title_name,title_description,fb_link,git_link,linkedin_link,about_title,about_description,
        servide_description,android_description,web_description,all_description,email}=req.body
    console.log(nav_title,title_name,title_description,fb_link,git_link,linkedin_link,about_title,about_description
        ,servide_description,android_description,web_description,all_description,email)
}