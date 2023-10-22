function searchCourse() {
    // Get the search term from the input field
    const searchTerm = document.getElementById("searchbar").value.toLowerCase();

    // Get all the course cards
    const courses = document.querySelectorAll(".card");

    // Get the search results container
    const foundCardsContainer = document.getElementById("found-cards-container");

    // Show the "Not Found" message by default
    const notFoundMessage = document.getElementById("not-found-message");
    notFoundMessage.style.display = "block";

    // Clear the centered container
    foundCardsContainer.innerHTML = '';

    // Loop through the cards and check if the course title includes the search term
    let anyCardFound = false;

    // Display all cards initially
    courses.forEach((course) => {
        course.style.display = "block";
    });

    courses.forEach((course) => {
        const courseTitle = course.querySelector(".card-title").textContent.toLowerCase();

        if (courseTitle.includes(searchTerm)) {
            // If it matches, move the card to the centered container
            foundCardsContainer.appendChild(course);

            // Hide the "Not Found" message
            notFoundMessage.style.display = "none";

            anyCardFound = true;
        } else {
            course.style.display = "none";
        }
    });

    // Display the centered container if any card is found
    if (anyCardFound) {
        foundCardsContainer.style.display = "block";
    }
}

function validateForm() {
    const firstName = document.forms["myForm"]["firstName"].value;
    const lastName = document.forms["myForm"]["lastName"].value;
    const email = document.forms["myForm"]["email"].value;
    const phone = document.forms["myForm"]["phone"].value;
    const reason = document.forms["myForm"]["reason"].value;
    const agreement = document.forms["myForm"]["agreement"].checked;

    if (firstName === "" || lastName === "" || email === "" || phone === "" || reason === "" || !agreement) {
        alert("Please fill out all required fields and agree to the terms.");
        return false; // Prevent form submission
    }

    // Additional validation checks can be added for specific fields (e.g., email format, phone number format).

    // If all validation passes, you can submit the form
    alert("Form submitted successfully!");
    return true; // Allow form submission
}

function countdown(hours, id) {
    var targetTime = new Date().getTime() + hours * 60 * 60 * 1000; // 24 hours in milliseconds

    var countdownTimer = setInterval(function() {
        var now = new Date().getTime();
        var timeLeft = targetTime - now;

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            document.getElementById(id).innerHTML = "Expired";
        } else {
            var hours = Math.floor(timeLeft / (1000 * 60 * 60));
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById(id).innerHTML = hours + "h : " + minutes + "m : " + seconds + "s left";
        }
    }, 1000);
}

function showDate(hours, id){
    const d = new Date()
    d.setHours(d.getHours()+hours)
    const formattedDate = d.toDateString() + ' ' + d.toLocaleTimeString();
    document.getElementById(id).innerHTML+=formattedDate
}
showDate(56, "showDateNaz")
showDate(72, "showDateIce")
// Call the countdown function to start the countdown when the page loads.
countdown(72, "countdown");
countdown(56, "countdown-nazerke")
