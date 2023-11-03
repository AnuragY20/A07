document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        // Create a text content for the text file
        const textContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

        // Create a Blob with the text content
        const blob = new Blob([textContent], { type: "text/plain" });

        // Create a URL for the Blob
        const url = window.URL.createObjectURL(blob);

        // Create a download link for the text file
        const a = document.createElement("a");
        a.href = url;
        a.download = "contact_data.txt";
        a.style.display = "none";

        // Append the link to the body and trigger a click event
        document.body.appendChild(a);
        a.click();

        // Remove the link and URL
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        alert("Thank you! Your message has been received.");
        form.reset(); // Reset the form
    });
});
