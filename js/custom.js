document.addEventListener("DOMContentLoaded", function () {
    var lastModifiedElement = document.getElementById("lastModified");
    var lastModifiedDate = new Date(document.lastModified);
    var formattedDate = formatDate(lastModifiedDate);
    lastModifiedElement.textContent = formattedDate;
});

function formatDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");
    return `${day}-${month}-${year}`;
}


//Modal

document.addEventListener('DOMContentLoaded', function () {
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
      setTimeout(function () {
        modal.hide();
      }, 3000);
});

//Modal


//Gallery Modal

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.event-image');
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImageContainer = document.getElementById('modalImageContainer');

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            const imagePath = this.src;

            // Clear previous images
            modalImageContainer.innerHTML = '';

            // Append the clicked image to modal container
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgElement.alt = 'Event Image';
            imgElement.classList.add('img-fluid', 'event-image-modal');
            modalImageContainer.appendChild(imgElement);

            // Show the modal
            modal.show();
        });
    });
});

//Gallery Modal





document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.event-card');
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImageContainer = document.getElementById('modalImageContainer');
    const modalTitle = document.getElementById('imageModalLabel');

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            const eventName = this.getAttribute('data-event-name');
            const imagePath = this.querySelector('.event-image').src;

            // Clear previous images
            modalImageContainer.innerHTML = '';

            // Append the clicked image to modal container
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgElement.alt = 'Event Image';
            imgElement.classList.add('img-fluid', 'event-image-modal');
            modalImageContainer.appendChild(imgElement);

            // Update modal title with the event name
            modalTitle.innerText = eventName;

            // Show the modal
            modal.show();
        });
    });
});
