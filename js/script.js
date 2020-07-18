



document.querySelector("#submit").addEventListener("click",()=>{
    let sWord = ["feldercarb", "frack", "skinjob", "vulgacarb"];
    const message  = document.querySelector("#message").value;
    const label  = document.querySelector("#messageaWarning");
    
    for( let i  ; i <= sWord.length; i++ ){
        
        if(sWord[i] === message){
            label.innerHTML = "dont talk shit mate";
            return false;


        }
        
        else{
            mailTo();
            return true;
        }

    }
    
});
function mailTo(){
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#message").value.trim();
    window.location.href = "mailto:akausha1@ualberta.ca?subject=" + subject + "&body=" + message ;
}




