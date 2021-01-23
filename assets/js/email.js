//Sends information from contact form to EmailJS and displays a success or failure message to ensure users knows if they have successfully submited their details//

function sendMail(contactForm) {
    emailjs.send("service_1jer91p", "spanish_quiz",{
        "fullName": contactForm.fullName.value,
        "email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            document.getElementById("contact-form").reset();
            alert("Thank you! We will be in touch shortly.");

        },
        function(error) {
             alert("Opps! There seems to be a problem at the moment, please try again later.");
        }
    );
    return false; 
}