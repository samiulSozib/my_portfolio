const {Schema,body, model}=require('mongoose')
const projectSchema=new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxlength:100,
    },
    body:{
        type:String,
        required:true,
    },
    customIndex:Number,
    category:{
        type:String,
        required:true,
    },
    thumbnail:String,
    links:{
        githubLink:String,
        liveShow:String,
    },
    comments:[
        {
            type:Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
},{
    timestamps:true
})
const Project=model('project',projectSchema)
module.exports=Project