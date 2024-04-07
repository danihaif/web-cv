document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeIn");
            }
        });
    });

    document.querySelectorAll('.container').forEach(section => {
        observer.observe(section);
    });

    // New code for click animation
    document.body.addEventListener("click", function(e) {
        const circle = document.createElement("div");
        circle.classList.add("click-circle");
        document.body.appendChild(circle);

        // Position the circle at the click location
        circle.style.left = `${e.clientX}px`;
        circle.style.top = `${e.clientY}px`;

        // Animation end cleanup
        circle.addEventListener("animationend", function() {
            circle.remove();
        });
    });
});
