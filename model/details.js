const {Schema,model}=require('mongoose')

const detailsSchema=new Schema({
    nav_title:{
        type:String,
        required:true
    },
    title_name:{
        type:String,
        required:true
    },
    title_description:{
        type:String,
        required:true
    },
    facebook_link:{
        type:String,
        required:true
    },
    github_link:{
        type:String,
        required:true
    },
    linkedin_link:{
        type:String,
        required:true
    },
    about_title:{
        type:String,
        required:true
    },
    about_description:{
        type:String,
        required:true
    },
    service_description:{
        type:String,
        required:true
    },
    web_description:{
        type:String,
        required:true
    },
    android_description:{
        type:String,
        required:true
    },
    all_description:{
        type:String,
        required:true
    },
},{
    timestamps:true
})

const Details=model('details',detailsSchema)
module.exports=Details