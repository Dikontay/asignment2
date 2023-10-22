//search
function searchCourse() {

    const searchTerm = document.getElementById("searchbar").value.toLowerCase();


    const courses = document.querySelectorAll(".card");


    const foundCardsContainer = document.getElementById("found-cards-container");

    const notFoundMessage = document.getElementById("not-found-message");
    notFoundMessage.style.display = "block";


    foundCardsContainer.innerHTML = '';


    let anyCardFound = false;


    courses.forEach((course) => {
        course.style.display = "block";
    });

    courses.forEach((course) => {
        const courseTitle = course.querySelector(".card-title").textContent.toLowerCase();

        if (courseTitle.includes(searchTerm)) {

            foundCardsContainer.appendChild(course);


            notFoundMessage.style.display = "none";

            anyCardFound = true;
        } else {
            course.style.display = "none";
        }
    });


    if (anyCardFound) {
        foundCardsContainer.style.display = "block";
    }
}
//form validation
function validateForm() {
    const firstName = document.forms["myForm"]["firstName"].value;
    const lastName = document.forms["myForm"]["lastName"].value;
    const email = document.forms["myForm"]["email"].value;
    const phone = document.forms["myForm"]["phone"].value;
    const reason = document.forms["myForm"]["reason"].value;
    const agreement = document.forms["myForm"]["agreement"].checked;

    if (firstName === "" || lastName === "" || email === "" || phone === "" || reason === "" || !agreement) {
        alert("Please fill out all required fields and agree to the terms.");
        return false;
    }


    alert("Form submitted successfully!");
    return true;
}

//image slider
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