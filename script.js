/* script.js */
let cups = localStorage.getItem("cups") ? parseInt(localStorage.getItem("cups")) : 0;

function updateProgress() {
    document.getElementById("cup-count").innerText = cups;
    document.getElementById("progress-bar").style.width = (cups * 10) + "%"; // Assuming 10 cups max
}

function navigateToUpdate() {
    localStorage.setItem("tempCups", cups);
    window.location.href = "update.html";
}

function increaseCups() {
    let tempCups = parseInt(localStorage.getItem("tempCups"));
    tempCups = Math.min(tempCups + 1, 10);
    localStorage.setItem("tempCups", tempCups);
    document.getElementById("update-cup-count").innerText = tempCups;
}

function decreaseCups() {
    let tempCups = parseInt(localStorage.getItem("tempCups"));
    tempCups = Math.max(tempCups - 1, 0);
    localStorage.setItem("tempCups", tempCups);
    document.getElementById("update-cup-count").innerText = tempCups;
}

function confirmUpdate() {
    cups = parseInt(localStorage.getItem("tempCups"));
    localStorage.setItem("cups", cups);
    window.location.href = "index.html";
}

function cancelUpdate() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("update-cup-count")) {
        document.getElementById("update-cup-count").innerText = localStorage.getItem("tempCups");
    } else {
        updateProgress();
    }
});
