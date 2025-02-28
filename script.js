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
            success: function (response, textStatus, xhr) {
                console.log("Raw Response:", response); // Debugging

                // Handle both JSON and plain text responses
                try {
                    var jsonResponse = typeof response === "string" ? JSON.parse(response) : response;
                    if (jsonResponse.status === "success") {
                        alert("Form submitted successfully!");
                        $("#contactForm")[0].reset();
                    } else {
                        alert("Error: " + jsonResponse.message);
                    }
                } catch (error) {
                    alert("Form submitted, but response parsing failed.");
                    console.log("Parsing Error:", error);
                }
            },
            error: function (xhr, status, error) {
                console.log("Error details:", xhr.responseText);
                alert("There was an error. Check the console for details.");
            }
        });
    });
});
