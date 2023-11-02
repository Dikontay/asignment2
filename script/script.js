function searchCourse() {
    // Get the search term from the input field
    const searchTerm = document.getElementById("searchbar").value.toLowerCase().trim();

    // Get all the course cards
    const courses = document.querySelectorAll(".card");

    // Get the search results container
    const foundCardsContainer = document.getElementById("found-cards-container");

    // Show the "Not Found" message by default
    const notFoundMessage = document.getElementById("not-found-message");

    // Clear the centered container
    foundCardsContainer.innerHTML = '';

    if (searchTerm === "") {
        // If the search bar is empty, do nothing and return
        return;
    }

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
    })

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

function countdown(targetDate, id) {
    // Get the target date and time in milliseconds
    const targetTime = new Date(targetDate).getTime();

    var countdownTimer = setInterval(function() {
        var now = new Date().getTime();
        var timeLeft = targetTime - now;

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            document.getElementById(id).innerHTML = "Expired";
        } else {
            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById(id).innerHTML = days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s left";
        }
    }, 1000);
}

// Call the countdown function with the specific target date and time
countdown("2023-11-25T15:00:00", "countdown"); // Replace the target date and time with your event's date and time
countdown("2023-11-22T10:30:00", "countdown-nazerke"); // Replace with the second event's date and time




let  currentSlide = 0;
const slides = document.querySelectorAll('#slider img');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('d-block');
    slides[currentSlide].classList.add('d-none');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.remove('d-none');
    slides[currentSlide].classList.add('d-block');
}

//SHOPPING BASKET!!!!!
// Define an array to store basket items
const basketItems = [];
let count = 0;
let totalPrice=0
// Function to add a course to the basket
function addToBasket(courseCard) {

    // Check if the course card is already in the shopping basket
    if (basketItems.includes(courseCard)) {
        // If it's already in the basket, do nothing or show a message to the user
        // You can show a message or handle this as per your requirements
        alert('This course is already in your basket.');
    } else {
        // If it's not in the basket, add it to the basket items array
        basketItems.push(courseCard);

        // Create a list item to display the added course in the shopping basket
        const basketList = document.getElementById('basket-items-modal');
        const basketItem = document.createElement('li.list-group-item');

        const itemName = document.createElement('span');
        itemName.textContent = courseCard.querySelector('.card-title').textContent + " ";
        const itemPrice = document.querySelector('.badge.text-bg-success').textContent;
        const itemPriceSpan = document.createElement('span');
        itemPriceSpan.textContent = itemPrice;


        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            removeItemFromBasket(courseCard, basketItem);
        });


        basketItem.appendChild(itemName);
        basketItem.appendChild(itemPriceSpan);
        basketItem.appendChild(deleteButton);

        totalPrice += 490; // Update the total price
        document.getElementById('totalbutton').textContent = totalPrice + "$"; // Update the total price displayed

        basketList.appendChild(basketItem);
        count++;
        updateBadgeVisibility(count);


    }
}

function removeItemFromBasket(courseCard, basketItem) {
    const index = basketItems.indexOf(courseCard);
    if (index !== -1) {
        basketItems.splice(index, 1);
        basketItem.remove();
        totalPrice -= 490; // Update the total price
        document.getElementById('totalbutton').textContent = totalPrice + "$"; // Update the total price displayed
        count--;
        updateBadgeVisibility(count);
    }
}

// Add event listeners to each "Add to Basket" button
const courseIds = [
    'course1', 'course2', 'course3', 'course4', 'course5',
    'course6', 'course7', 'course8', 'course9', 'course10',
    'course11', 'course12'
];

for (let i = 0; i < courseIds.length; i++) {
    const courseId = courseIds[i];
    const courseCard = document.getElementById(courseId);

    if (courseCard) {
        const addToBasketButton = courseCard.querySelector('.add-to-basket');

        if (addToBasketButton) {
            addToBasketButton.addEventListener('click', function() {
                addToBasket(courseCard);
            });
        }
    }
}
const basketBadge = document.getElementById('basket-badge');
const basketQuantity = document.getElementById('basket-quantity');
// Function to update the badge visibility
function updateBadgeVisibility(itemCount) {
    if (itemCount > 0) {
        basketQuantity.textContent = itemCount;
        basketBadge.style.display = 'block'; // Show the badge
    } else {
        basketBadge.style.display = 'none'
        basketQuantity.display = 'none'; // Hide the badge
    }
}


