const Details=require('../model/details')

exports.getPortfolioController=async(req,res,next)=>{

    try{

        let _details=await Details.find()
        //console.log(details[0])
        let details=_details[0]
        return res.render('admin/pages/dashboard/portfolio/dashboard',{title:'Portfolio Details',details})

    }catch(e){
        console.log(e)
        next(e)
    }

    
}
exports.getEditPortfolioController=async(req,res,next)=>{
    let detailsId=req.params.detailsId
    try{

        let details=await Details.findOne({_id:detailsId})

        return res.render('admin/pages/dashboard/portfolio/details',{title:'Portfolio Details',details}) 

    }catch(e){
        console.log(e)
        next(e)
    }
    
}

// exports.postEditPortfolioController=async(req,res,next)=>{
//     let {nav_title,title_name,title_description,fb_link,git_link,linkedin_link,about_title,about_description,
//         service_description,android_description,web_description,all_description,email}=req.body
//     console.log(nav_title,title_name,title_description,fb_link,git_link,linkedin_link,about_title,about_description
//         ,service_description,android_description,web_description,all_description,email)

//         try{

//             let details=new Details({
//                 nav_title,
//                 title_name,
//                 title_description,
//                 fb_link,
//                 git_link,
//                 linkedin_link,
//                 about_title,
//                 about_description,
//                 service_description,
//                 android_description,
//                 web_description,
//                 all_description,
//                 email
//             })

//             let createdDetails=await details.save()

//             if(!createdDetails){
//                 return res.json({
//                     error:"Something Wrong"
//                 })
//             }

//             return res.redirect('/portfolio')

//         }catch(e){
//             console.log(e)
//             next(e)
//         }
// }

exports.updateEditPortfolioController=async(req,res,next)=>{
    let detailsId=req.params.detailsId
    let {nav_title,title_name,title_description,fb_link,git_link,linkedin_link,about_title,about_description,
                 service_description,android_description,web_description,all_description,email}=req.body

    try{

        let details=await Details.findOne({_id:detailsId})

        if(!details){
            return res.json({
                error:'Some thing wrong'
            })
        }

        await Details.findOneAndUpdate(
            {_id:detailsId},
            {$set:{nav_title,title_name,title_description,fb_link,git_link,linkedin_link,about_title,about_description,
                service_description,android_description,web_description,all_description,email}},
                {new:true}
        )

        return res.redirect('/portfolio')




    }catch(e){
        console.log(e)
        nnext(e)
    }
}