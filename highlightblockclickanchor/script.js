$(document).ready(function(){
    var yakor = window.location.hash.replace("#","");
    if(yakor!=''){
        $('#'+yakor).addClass('selectedResponces');
    }
});