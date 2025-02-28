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
            url: "https://script.google.com/macros/s/AKfycbwv2IQ92vwBYQPWO8mGt6ubx-Co_4FcgBL5PsDU89r_sRRF2a_dhzE9KuepVBYROMVpRg/exec", // Replace with your actual script URL
            type: "POST",
            data: formData,
            success: function (response) {
                alert("Form submitted successfully!");
                $("#contactForm")[0].reset();
            },
            error: function () {
                alert("There was an error. Try again.");
            }
        });
    });
});
