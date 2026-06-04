/**
 * site.js — small enhancements added with the redesign
 * Theme toggle: remembers light/dark choice in localStorage
 */

(function () {
    var storageKey = "bhrm-theme";
    var root = document.documentElement;
    var toggleBtn = document.getElementById("themeToggle");

    /* Apply saved theme as early as the script runs */
    function applyTheme(theme) {
        if (theme === "light") {
            root.setAttribute("data-theme", "light");
        } else {
            root.removeAttribute("data-theme");
        }
        if (toggleBtn) {
            toggleBtn.textContent = theme === "light" ? "Dark mode" : "Light mode";
            toggleBtn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
        }
    }

    var saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") {
        applyTheme(saved);
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            var isLight = root.getAttribute("data-theme") === "light";
            var next = isLight ? "dark" : "light";
            applyTheme(next);
            localStorage.setItem(storageKey, next);
        });
    }
})();
