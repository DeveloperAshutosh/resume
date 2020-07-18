
document.querySelector("#submit").addEventListener("click",(e)=>{
    e.preventDefault();
    swordblocker();
    
    
    
});
function mailTo(e){
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#message").value.trim();
    window.location.href = "mailto:akausha1@ualberta.ca?subject=" + subject + "&body=" + message ;
   console.log( "mailTo running..." );
}
function swordblocker(){
    let sWord = ["feldercarb", "frack", "skinjob", "vulgacarb"];
    console.log( "swordblocker running..." );
   
    const message  = document.querySelector("#message");
    const label  = document.querySelector(".messageWarning");
        let i;
        let errors = false;
    
    for(  i = 0  ; i < sWord.length; i++ ){
        
        
        if( message.value.includes(sWord[i])){
           
            console.log("message is" + message.value);
            
            errors = true ;
        } 
        
    }
    if(errors === true){
        label.innerHTML = "Please be professional";
        message.value = "";
        message.focus();
    }
    else{
        label.innerHTML="";
        mailTo();
    }
       
}




