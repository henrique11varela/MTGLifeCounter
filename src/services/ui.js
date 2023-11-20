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
    console.log('peepoo');
    if (localStorage.getItem("theme") != "dark") {
        applyDarkMode();
        localStorage.setItem("theme", "dark");
    } else {
        applyDarkMode();
        localStorage.setItem("theme", "");
    }
}
