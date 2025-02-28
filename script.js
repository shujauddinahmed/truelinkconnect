$(document).ready(function () {
    $("#contactForm").submit(function (event) {
        event.preventDefault();

        const formData = {
            companyName: $("input[name='companyName']").val(),
            contactPerson: $("input[name='contactPerson']").val(),
            email: $("input[name='email']").val(),
            phoneNumber: $("input[name='phoneNumber']").val(),
            projectName: $("input[name='projectName']").val(),
            projectDescription: $("textarea[name='projectDescription']").val(),
            problemSolved: $("textarea[name='problemSolved']").val(),
            targetAudience: $("textarea[name='targetAudience']").val(),
            competitorApps: $("input[name='competitorApps']").val(),
            expectedUserBase: $("input[name='expectedUserBase']").val(),
            preferredLaunchDate: $("input[name='preferredLaunchDate']").val()
        };

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwh3A1IrE8mLvsnvK6Gb6g0Ju1O1yLL-kvsIFQVK7kUkOYd2p3f6RrC1W9fpxY-fgkoVA/exec", // Replace with your
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function (response) {
                $("#responseMessage").text("Form submitted successfully!");
                $("#contactForm")[0].reset();
            },
            error: function () {
                $("#responseMessage").text("There was an error. Try again.");
            }
        });
    });
});
