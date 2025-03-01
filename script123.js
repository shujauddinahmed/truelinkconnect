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
    url: "https://script.google.com/macros/s/AKfycbzag4GDhKtdGiwcQ-1LQY5oBYHqX65G0I8AJzy0TPnGtM3jhBKgAPh8sIuCAZJZi4fGoQ/exec", // Replace with your Web App URL
    type: "POST",
    data: formData,
    crossDomain: true,
    success: function (response) {
        console.log("Raw Response:", response);
        
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
