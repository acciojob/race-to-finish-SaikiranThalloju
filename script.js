window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// script.js

// Array of promises with random timeouts
window.promises = [
    new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), getRandomTime())),
    new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), getRandomTime())),
    new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), getRandomTime())),
    new Promise((resolve) => setTimeout(() => resolve("Promise 4 resolved"), getRandomTime())),
    new Promise((resolve) => setTimeout(() => resolve("Promise 5 resolved"), getRandomTime()))
];

// Function to get a random time between 1 and 5 seconds
function getRandomTime() {
    return Math.floor(Math.random() * 5000) + 1000; // Random time between 1000 and 6000 milliseconds (1 to 5 seconds)
}

// Using Promise.any() to wait for the first promise to resolve
Promise.any(window.promises)
    .then((result) => {
        // Print the result to the output div
        document.getElementById('output').innerText = result;
    })
    .catch((error) => {
        // Handle errors if all promises reject
        console.error("All promises rejected:", error);
    });

