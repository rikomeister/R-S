document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('connect.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message);
            // Optionally, reset the form
            document.getElementById('signup-form').reset();
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});
