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
