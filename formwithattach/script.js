var allowed_file_size = "5048576"; //allowed file size
var allowed_files = ['image/png', 'image/gif', 'image/jpeg', 'image/pjpeg', 'application/zip', 'application/msword', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']; //allowed file types
var border_color = "#C2C2C2"; //initial input border color

$("#contact_body").submit(function(e){
    e.preventDefault(); //prevent default action 
    proceed = true; //set proceed flat to true
    
    //simple input validation
    $($(this).find("input[data-required=true], textarea[data-required=true]")).each(function(){
            if(!$.trim($(this).val())){ //if this field is empty 
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag
            }
            //check invalid email
            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
            if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                $(this).css('border-color','red'); //change border color to red   
                proceed = false; //set do not proceed flag              
            }
    }).on("input", function(){ //change border color to original
         $(this).css('border-color', border_color);
    });
    
    //check file size and type before upload, works in modern browsers
    if(window.File && window.FileReader && window.FileList && window.Blob){
        var total_files_size = 0;
        $(this.elements['file_attach[]'].files).each(function(i, ifile){
            if(ifile.value !== ""){ //continue only if file(s) are selected
                if(allowed_files.indexOf(ifile.type) === -1){ //check unsupported file
                    alert( ifile.name + " Данный тип файлов не поддерживается");
                    proceed = false;
                }
             total_files_size = total_files_size + ifile.size; //add file size to total size
            }
        }); 
       if(total_files_size > allowed_file_size){ 
            alert( "Максимальный вес файла 5мб");
            proceed = false;
        }
    }
    
    //if everything's ok, continue with Ajax form submit
    if(proceed){ 
        var post_url = $(this).attr("action"); //get form action url
        var request_method = $(this).attr("method"); //get form GET/POST method
        var form_data = new FormData(this); //constructs key/value pairs representing fields and values
        
        $.ajax({ //ajax form submit
            url : post_url,
            type: request_method,
            data : form_data,
            dataType : "json",
            contentType: false,
            cache: false,
            processData:false
        }).done(function(res){ //fetch server "json" messages when done
            if(res.type == "error"){
                $("#contact_results").html('<div class="error">'+ res.text +"</div>");
            }
            
            if(res.type == "done"){
                $("#contact_results").html('<div class="success">'+ res.text +"</div>");
				$("#contact_body")[0].reset();
				setTimeout(function() {
					$('#gettender .popup-form__close').click();
					console.log('true');
				}, 3000)
            }
        });
    }
});