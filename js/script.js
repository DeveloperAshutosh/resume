
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");    
const message = document.querySelector("#message");
const submit = document.querySelector("#submit");
const fNameWarning = document.querySelector(".firstNameWarning");
const lNameWarning = document.querySelector(".lastNameWarning");
const emailWarning = document.querySelector(".emailWarning");
const subWarning = document.querySelector(".subjectWarning");
const messageWarning = document.querySelector(".messageWarning");


submit.addEventListener("click",()=>{
    if (firstName.value.trim() === "")
    {
       fNameWarning.innerHTML = "*Your First name is missing ";
    }
    else{
        fNameWarning.innerHTML = "";
    }
    if (lastName.value.trim() === ""){
        lNameWarning.innerHTML   = "*Your Last name is missing ";
    }
    else{
        lNameWarning.innerHTML = "";
    }
    if (email.value.trim() === ""  ){
        emailWarning.innerHTML =  "*Your Email is missing ";
    }
    else{
        emailWarning.innerHTML = "";
    }
    if (subject.value.trim() === ""  ){
        subWarning.innerHTML = "*Subject is missing ";
        
    }
    else{
        subWarning.innerHTML = "";
    }

});

