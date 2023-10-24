window.addEventListener("load", () => {
    const loaderContainer = document.querySelector(".loader-container");
    setTimeout(() => {
        loaderContainer.style.display = "none";
    }, 1);
});