function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_fpppv3w", "template_3z43oql", params).then(function(res) {
        alert("Terkirim! " + res.status);
    })
}