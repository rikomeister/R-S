document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("login-form");

    // Get the box icon that opens the modal
    var boxIcon = document.getElementById("box-icon");

    // Get the <span> element that closes the modal
    var closeButton = document.getElementById("close-btn");

    // When the user clicks on the box icon, open the modal
    boxIcon.onclick = function(event) {
        event.preventDefault();  // Prevent default action
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Toggle between login and signup
    document.getElementById("signup-title").onclick = function() {
        document.querySelector(".signup").classList.remove("slide-up");
        document.querySelector(".login").classList.add("slide-up");
    }

    document.getElementById("login-title").onclick = function() {
        document.querySelector(".signup").classList.add("slide-up");
        document.querySelector(".login").classList.remove("slide-up");
    }
});
