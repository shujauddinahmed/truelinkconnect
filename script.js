$(document).ready(function () {
    $("#contactForm").submit(function (event) {
        event.preventDefault();

        var formData = {
            companyName: $("#companyName").val(),
            contactPerson: $("#contactPerson").val(),
            email: $("#email").val(),
            phoneNumber: $("#phoneNumber").val(),
            projectName: $("#projectName").val(),
            projectDescription: $("#projectDescription").val(),
            problemSolved: $("#problemSolved").val(),
            targetAudience: $("#targetAudience").val(),
            competitors: $("#competitors").val(),
            expectedUserBase: $("#expectedUserBase").val(),
            launchDate: $("#launchDate").val()
        };

        $.ajax({
    url: "YOUR_GOOGLE_SCRIPT_URL", // Replace with your actual Web App URL
    type: "POST",
    data: formData,
    crossDomain: true,
    success: function (response) {
        console.log("Raw Response:", response); // Debugging
        
        if (response.status === "success") {
            alert("Form submitted successfully!");
            $("#contactForm")[0].reset();
        } else {
            alert("Error: " + response.message);
        }
    },
    error: function (xhr) {
        console.log("Error details:", xhr.responseText);
        alert("There was an error. Check the console for details.");
    }
});
    });
});
