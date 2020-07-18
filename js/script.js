



document.querySelector("#submit").addEventListener("click",(e)=>{
    let sWord = ["feldercarb", "frack", "skinjob", "vulgacarb"];
    const message  = document.querySelector("#message");
    const label  = document.querySelector("#messageaWarning");
        let i;
    for(  i = 0  ; i <= sWord.length; i++ ){
       let errors = false;
        
        if( sWord.includes(message)){
            label.innerHTML = "Please be professional";
            
           
           errors = true;
            
        }
        
        else{
            mailTo();
            
        }
        

    }
    
});
function mailTo(){
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#message").value.trim();
    window.location.href = "mailto:akausha1@ualberta.ca?subject=" + subject + "&body=" + message ;
}




