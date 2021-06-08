window.onload=function(){
    tinymce.init({
        selector:'textarea#tiny-mce-post-body',
        plugins:["advlist lists link autolink autosave code",
        'preview','searchreplace','wordcount','media table emoticons image imagetools'],
        toolbar: 'bold italic underline | alignleft alignright aligncenter alignjustify | bullist numlist outdent indent | link image media | forecolor backcolor emoticons | code preview',
        height:300,
        automatic_uploads:true,
        images_upload_url:'/uploads/projectimage',
        relative_urls: false,
        images_upload_handler: function(blobInfo, success, failure){
            let headers=new Headers()
            headers.append('Accept','Application/JSON')

            let formData=new FormData()
            formData.append('project-image',blobInfo.blob(),blobInfo.filename())

            let req=new Request('/uploads/projectimage',{
                method:'POST',
                headers,
                mode:'cors',
                body:formData

            })

            fetch(req)
                .then(res=> res.json())
                .then(data=>success(data.imageUrl))
                .catch(()=>failure('HTTP Error'))
        }
    })
}