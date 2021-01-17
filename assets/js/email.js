function sendMail(contactForm) {
    emailjs.send("service_1jer91p", "spanish_quiz",{
        "fullName": contactForm.fullName.value,
        "email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("contact-form").reset();
            alert("Thank you! We will be in touch shortly.");

        },
        function(error) {
            console.log("FAILED", error);
             alert("Opps! There seems to be a problem at the moment, please try again later.");
        }
    );
    return false; 
}