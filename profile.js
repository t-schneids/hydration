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

    // Save data when "Save" is clicked
    saveBtn.addEventListener("click", function () {
        localStorage.setItem("first_name", firstNameInput.value);
        localStorage.setItem("last_name", lastNameInput.value);
        localStorage.setItem("age", ageInput.value);
        localStorage.setItem("height", heightInput.value);

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





