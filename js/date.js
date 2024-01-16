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
