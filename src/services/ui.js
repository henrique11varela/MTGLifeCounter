export { toggleHidden, applyDarkMode, toggleDarkMode };

function toggleHidden(element) {
    element.classList.toggle("hidden");
}

function applyDarkMode() {
    if (localStorage.getItem("theme") != "dark") {
        document.documentElement.classList.remove("dark");
    } else {
        document.documentElement.classList.add("dark");
    }
}

function toggleDarkMode() {
    if (localStorage.getItem("theme") != "dark") {
        localStorage.setItem("theme", "dark");
        applyDarkMode();
    } else {
        localStorage.setItem("theme", "");
        applyDarkMode();
    }
}
