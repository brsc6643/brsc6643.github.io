// Hook Text Transition Script
document.addEventListener("DOMContentLoaded", function () {
    // Show the intro box after 3 seconds and hide the loader
    // Use document.getElementById to load loader, intro-box, and intro-content in first section
    // Store the loaded content in coordinated variables
    const loader = document.getElementById("loader");
    const introBox = document.getElementById("intro-box");
    const introContent = document.getElementById("intro-content");

    setTimeout(function () {
        loader.style.display = "none"; // Hide the loader
        introContent.style.opacity = "1" // Update the intro content's opacity for a fade in
        introBox.style.display = "block"; // Show the intro box
        introBox.classList.add("intro-box-visible"); // Add fade-in effect
    }, 3000);
});

// Matrix Background Effect Script
window.addEventListener("load", function () {
    var canvas = document.getElementById('matrix');
    var ctx = canvas.getContext('2d');

    // Set canvas dimensions to fit the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
    matrix = matrix.split(''); // Split the string into an array of characters

    var font_size = 16;
    var columns = canvas.width / font_size; // Number of columns for the rain effect
    var drops = []; // Array to store the y-position of each column drop

    // Initialize the drops at the top of the canvas
    for (var x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    // Function to draw the matrix effect
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Create a fading effect
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Cover the canvas with semi-transparent black

        ctx.fillStyle = '#0F0'; // Green text color for matrix effect
        ctx.font = font_size + 'px arial'; // Set font size

        // Loop through each column of drops
        for (var i = 0; i < drops.length; i++) {
            // Select a random character from the matrix array
            var text = matrix[Math.floor(Math.random() * matrix.length)];
            // Draw the character at the current drop position
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            // Randomly reset the drop to the top with a small probability
            if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Move the drop down by one position
            drops[i]++;
        }
    }

    // Use setInterval() to call draw() every 35 seconds
    setInterval(draw, 35);

    // Use window.addEventListener to update canvas dimensions to window dimensions on resizing
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = canvas.width / font_size;
        drops = [];
        for (var x = 0; x < columns; x++) {
            drops[x] = 1;
        }
    });
});
