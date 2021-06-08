const {body}=require('express-validator')
const Post=require('../../../model/project')


module.exports=[
    body('title')
        .isLength({min:5,max:100})
        .withMessage('Title must be between 5 to 100 chars')
        .trim(),
    body('body')
        .not()
        .isEmpty()
        .withMessage('Body can not be empty')
]