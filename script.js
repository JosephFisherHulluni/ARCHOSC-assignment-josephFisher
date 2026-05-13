document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") {
        this.location.replace("secret.html");
    }
});