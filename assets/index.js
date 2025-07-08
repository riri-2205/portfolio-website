const toggleBtn = document.getElementById("toggle-theme");

var theme = "light";

toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (theme === "light"){
        theme = "dark";
        toggleBtn.innerHTML = "🌞";
    }
    else {
        theme = "light";
        toggleBtn.innerHTML = "🌙";
    }
});