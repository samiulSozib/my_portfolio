const Details=require('../../model/details')

exports.getHomepageController=async(req,res,next)=>{
    try{

        let _details=await Details.find()
        let details=_details[0]
        //console.log(details)

        return res.render('user/pages/homepage',{details})
    }catch(e){
        console.log(e)
        next(e)
    }
    
}

