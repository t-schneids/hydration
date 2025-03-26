document.addEventListener("DOMContentLoaded", function () {
    const firstNameInput = document.getElementById("first_name");
    const lastNameInput = document.getElementById("last_name");
    const ageInput = document.getElementById("age");
    const heightInput = document.getElementById("height");
    const editBtn = document.getElementById("edit-btn");
    const saveBtn = document.getElementById("save-btn");
    const profileHeader = document.getElementById("profile-header");

    // Function to load saved data
    function loadProfile() {
        firstNameInput.value = localStorage.getItem("first_name") || "";
        lastNameInput.value = localStorage.getItem("last_name") || "";
        ageInput.value = localStorage.getItem("age") || "";
        heightInput.value = localStorage.getItem("height") || "";
        profileHeader.innerText = localStorage.getItem("profileHeader") || "User Profile";
    }

    // Load profile when the page is opened
    loadProfile();

    // Enable editing when "Edit" is clicked
    editBtn.addEventListener("click", function () {
        firstNameInput.disabled = false;
        lastNameInput.disabled = false;
        ageInput.disabled = false;
        heightInput.disabled = false;
        editBtn.style.display = "none";
        saveBtn.style.display = "inline-block";
    });

    function getHydrationGoal(height) {
        let waterIntakeCups;
    
        if (height >= 55 && height <= 59) {
            waterIntakeCups = 7; // max value in range 6–7 cups
        } else if (height >= 60 && height <= 64) {
            waterIntakeCups = 8; // max value in range 7–8 cups
        } else if (height >= 65 && height <= 69) {
            waterIntakeCups = 9; // max value in range 8–9 cups
        } else if (height >= 70 && height <= 74) {
            waterIntakeCups = 10; // max value in range 9–10 cups
        } else if (height >= 75 && height <= 79) {
            waterIntakeCups = 11; // max value in range 10–11 cups
        } else if (height >= 80) {
            waterIntakeCups = 12; // max value in range 11–12 cups
        } else {
            waterIntakeCups = 7; // Default to lowest range if height is out of expected bounds
        }
    
        localStorage.setItem("hydrationGoal", waterIntakeCups);
        return waterIntakeCups;
    }

    // Save data when "Save" is clicked
    saveBtn.addEventListener("click", function () {
        localStorage.setItem("first_name", firstNameInput.value);
        localStorage.setItem("last_name", lastNameInput.value);
        localStorage.setItem("age", ageInput.value);
        localStorage.setItem("height", heightInput.value);

        // modify hydration goal based on height
        let newGoal = getHydrationGoal(parseInt(heightInput.value));
        localStorage.setItem("hydrationGoal", newGoal);

        // Disable inputs again
        firstNameInput.disabled = true;
        lastNameInput.disabled = true;
        ageInput.disabled = true;
        heightInput.disabled = true;

        editBtn.style.display = "inline-block";
        saveBtn.style.display = "none";

        updateProfileHeader();
    });


    function updateProfileHeader() {
        const firstName = document.getElementById("first_name").value.trim();
        if (firstName) {
            document.getElementById("profile-header").innerText = `${firstName}'s Profile`;
            localStorage.setItem("profileHeader", `${firstName}'s Profile`);
        }
    }
});





