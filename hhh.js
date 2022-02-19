window.onload = function(){

    var btn=document.getElementById('btn');
    btn.onclick=function(){

        if($('#text').val()!='Huaijin Dai'){
            $("#home").hide();
            $("#no").show();
        }
        if($('#text').val()=='Huaijin Dai'){
            $("#home").hide();
            $("#yes").show();
        }

    }

}