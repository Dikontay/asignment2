
const searchInput = document.getElementById('searchbar');
searchInput.addEventListener('input', search_course);
function search_course() { 
    let input = document.getElementById('searchbar').value.toLowerCase();
    let courseElements = document.querySelectorAll('.container .card');
    let searchResults = document.getElementById('search-results');

    while (searchResults.firstChild) {
        searchResults.removeChild(searchResults.firstChild);
    }

 courseElements.forEach(courseElement => {
        let title = courseElement.querySelector('.card-title').textContent.toLowerCase();
            //console.log(title)
        
        // Check if the input exists in the title of this course element
        if (title.includes(input)) {
          
            // This course matches the search criteria
            const matchingCardCopy = courseElement

            searchResults.appendChild(matchingCardCopy);
           
        } else {
            // This course does not match the search criteria, hide it
            courseElement.style.display = 'none';
        }
    });
}