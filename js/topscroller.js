
document.addEventListener("DOMContentLoaded", () => {
    // Disable automatic scroll restoration
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    // Smooth scroll to the top when the page is loaded
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
