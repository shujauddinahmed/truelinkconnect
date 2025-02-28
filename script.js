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
            url: "https://script.google.com/macros/s/AKfycbzag4GDhKtdGiwcQ-1LQY5oBYHqX65G0I8AJzy0TPnGtM3jhBKgAPh8sIuCAZJZi4fGoQ/exec", // Replace with actual Web App URL
            type: "POST",
            data: formData,
            crossDomain: true,
            dataType: "json",
            success: function (response) {
                alert("Form submitted successfully!");
                $("#contactForm")[0].reset();
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
                alert("There was an error. Try again.");
            }
        });
    });
});
