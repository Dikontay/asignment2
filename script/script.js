function search_course() { 
    let input = document.getElementById('searchbar').value.toLowerCase();
    let courseElements = document.querySelectorAll('.main-courses .card');

    courseElements.forEach(courseElement => {
        let title = courseElement.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(input)) {
            console.log(courseElement)
            courseElement.style.display = "block"; // Show the course
        } else {
            courseElement.style.display = "none"; // Hide the course
        }
    });
} 