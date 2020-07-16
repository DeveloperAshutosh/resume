console.log("hello");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");    
const message = document.querySelector("#message");
const submit = document.querySelector("#submit");


submit.addEventListener("click",()=>{
    if (firstName.value.trim() === "")
    {
       firstName.value  = "*Your First name is missing ";
    }
    if (lastName.value.trim() === ""){
        lastName.value = "*Your Last name is missing ";
    }
    if (email.value.trim() === ""  ){
        email.value =  "*Your email is missing ";
    }
    if (subject.value.trim() === ""  ){
        subject.value = "*subject is missing ";
        
    }

    if (message.value.trim() === ""){
        message.value = "*please enter some value  ";
    }
});
