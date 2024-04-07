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
});
