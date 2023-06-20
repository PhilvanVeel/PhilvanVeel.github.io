// Select all buttons with the class "section-btn"
var sectionBtns = document.querySelectorAll('.section-btn');

// Loop through the buttons and add a click event listener to each one
sectionBtns.forEach(function (button) {
    button.addEventListener('click', function () {
        // Get the target section based on the data-target attribute of the clicked button
        var targetSection = document.querySelector(this.dataset.target);

        // Hide all sections
        document.querySelectorAll('.section').forEach(function (section) {
            section.classList.add('d-none');
            section.classList.remove('d-block');
        });

        // Show the target section
        targetSection.classList.remove('d-none');
        targetSection.classList.add('d-block');
    });
});
