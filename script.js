/* script.js */
let cups = localStorage.getItem("cups") ? parseInt(localStorage.getItem("cups")) : 0;

let weeklySavings = 15

function updateProgress() {
    document.getElementById("cup-count").innerText = cups;
    document.getElementById("progress-bar").style.width = (cups * 10) + "%"; // Assuming 10 cups max
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

function updateGoal() {
    let newGoal = prompt("Enter your new daily water intake goal (cups):");
    if (newGoal && !isNaN(newGoal)) {
        localStorage.setItem("hydrationGoal", newGoal);
        alert(`Goal updated to ${newGoal} cups per day!`);
    } else {
        alert("Please enter a valid number.");
    }
}

function updateProfileHeader() {
    const firstName = document.getElementById("first_name").value.trim();
    if (firstName) {
        document.getElementById("profile-header").innerText = `${firstName}'s Profile`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("edit-btn").addEventListener("click", function () {
        document.getElementById("first_name").disabled = false;
        document.getElementById("last_name").disabled = false;
        document.getElementById("age").disabled = false;
        document.getElementById("height").disabled = false;
        document.getElementById("edit-btn").style.display = "none";
        document.getElementById("save-btn").style.display = "inline";
    });

    document.getElementById("save-btn").addEventListener("click", function () {
        const firstName = document.getElementById("first_name").value.trim();
            if (firstName) {
            localStorage.setItem("first_name", firstName);
        }
    
        document.getElementById("first_name").disabled = true;
        document.getElementById("last_name").disabled = true;
        document.getElementById("age").disabled = true;
        document.getElementById("height").disabled = true;
        document.getElementById("edit-btn").style.display = "inline";
        document.getElementById("save-btn").style.display = "none";
    
        updateProfileHeader();
    });
    
});
