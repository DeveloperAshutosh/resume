
const namev = document.querySelector("#firstName");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const submit = document.querySelector("#submit");
const nameWarning = document.querySelector(".firstNameWarning");
const emailWarning = document.querySelector(".emailWarning");
const subjectWarning = document.querySelector(".subjectWarning");
const messageWarning = document.querySelector(".messageWarning");
let sWords = [];

submit.addEventListener("click",()=>{



mailTo();

});
function mailTo(){
    window.location.href = "mailto:akausha1@ualberta.ca   "  + "?subject=" + subject.value + "&body=" +message.innerHTML;
}










