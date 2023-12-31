// document.addEventListener("DOMContentLoaded", function() {
//     // Get the countdown and GIF elements
//     const countdownElement = document.getElementById("countdown");
//     const gifElement = document.getElementById("gif");

//     // Set the initial countdown value
//     let countdownValue = 10;

//     // Update the countdown every second
//     const countdownInterval = setInterval(function() {
//         countdownElement.textContent = countdownValue;

//         // Decrease the countdown value
//         countdownValue--;

//         // If countdown reaches 0, clear the interval and show the GIF
//         if (countdownValue === -1) {
//             clearInterval(countdownInterval);
//             countdownElement.style.display = "none";
//             gifElement.style.display = "block";
//         }
//     }, 1000);
// });
// document.addEventListener("DOMContentLoaded", function() {
//     // Get the countdown and GIF elements
//     const countdownElement = document.getElementById("countdown");
//     const gifElement = document.getElementById("gif");

//     // Set the initial countdown values (hours, minutes, seconds)
//     let hours = 0;
//     let minutes = 0;
//     let seconds = 4;

//     // Update the countdown every second
//     const countdownInterval = setInterval(function() {
//         // Display the countdown in HH:MM:SS format
//         countdownElement.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

//         // Decrease the countdown values
//         if (seconds > 0) {
//             seconds--;
//         } else if (minutes > 0) {
//             minutes--;
//             seconds = 59;
//         } else if (hours > 0) {
//             hours--;
//             minutes = 59;
//         }

//         // If countdown reaches 0, clear the interval and show the GIF
//         if (hours === 0 && minutes === 0 && seconds === 0) {
//             clearInterval(countdownInterval);
//             countdownElement.style.display = "none";
//             gifElement.style.display = "block";
//         }
//     }, 1000);

//     // Function to format time values (add leading zeros)
//     function formatTime(value) {
//         return value < 10 ? "0" + value : value;
//     }
// });
document.addEventListener("DOMContentLoaded", function() {
    // Get the countdown and GIF elements
    const countdownElement = document.getElementById("countdown");
    const gifElement = document.getElementById("gif");

    // Set the initial countdown value
    let countdownValue = 5;

    // Update the countdown every second
    const countdownInterval = setInterval(function() {
        countdownElement.textContent = countdownValue;

        // Decrease the countdown value
        countdownValue--;

        // If countdown reaches 0, clear the interval and show the GIF
        if (countdownValue === -1) {
            clearInterval(countdownInterval);
            countdownElement.style.display = "none";
            gifElement.style.display = "block";
        }
    }, 1000);
});
