const contactForm=document.querySelector('.contact-form')
let email=document.getElementById('email')
let name=document.getElementById('name')
let comment=document.getElementById('comment')


contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
     let formData={
         email:email.value,
         name:name.value,
         comment:comment.value
     }

     console.log(formData)
     let xhr=new XMLHttpRequest();
     xhr.open('POST','/')
     xhr.setRequestHeader('Content-type','application/json')
     xhr.onload=function(){
         console.log(xhr.responseText.toString())
         if(xhr.responseText=='success'){
             alert('Email Sent Success')
             email.value=""
             name.value=""
             comment.value=""
         }else{
             alert('Something Wrong to Send Email')
         }
     }
     xhr.send(JSON.stringify(formData));
})