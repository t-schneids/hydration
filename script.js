/* script.js */
let cups = localStorage.getItem("cups") ? parseInt(localStorage.getItem("cups")) : 0;

let weeklySavings = 15

// need to create variable for hydration goal (i.e. max cups)
let hydrationGoal = localStorage.getItem("hydrationGoal") || 10;
localStorage.setItem("hydrationGoal", hydrationGoal);

function updateProgress() {
    document.getElementById("cup-count").innerText = cups;
    document.getElementById("progress-bar").style.width = Math.round((cups / localStorage.getItem("hydrationGoal")) * 100) + "%"; // Assuming 10 cups max
    let weeklySavings = 10 + (Math.round(cups / 3))

   localStorage.setItem("lifetimeSavings", weeklySavings * 68)
   localStorage.setItem("yearlySavings", weeklySavings * 52)
   localStorage.setItem("monthlySavings", weeklySavings * 4)
   localStorage.setItem("weeklySavings", weeklySavings)
}

function navigateToUpdate() {
    localStorage.setItem("tempCups", cups);
    window.location.href = "update.html";
}

function increaseCups() {
    let tempCups = parseInt(localStorage.getItem("tempCups"));
    tempCups = Math.min(tempCups + 1, localStorage.getItem("hydrationGoal"));
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

function updateGoal() {
    let newGoal = prompt("Enter your new daily water intake goal (cups):");
    if (newGoal && !isNaN(newGoal)) {
        localStorage.setItem("hydrationGoal", newGoal);
        alert(`Goal updated to ${newGoal} cups per day!`);
        updateProgress();
        document.getElementById("daily-goal").innerText = `Daily Hydration Goal (cups): ${localStorage.getItem("hydrationGoal") || 10}`;
    } else {
        alert("Please enter a valid number.");
    }
}

    
