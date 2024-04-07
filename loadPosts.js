document.addEventListener('DOMContentLoaded', () => {
    fetch('https://raw.githubusercontent.com/danihaif/web-cv/main/posts.json')
        .then(response => response.json())
        .then(posts => {
            // Sort posts by date in descending order
            posts.sort((a, b) => {
                // Convert dates to numbers and subtract them to get a comparison value
                return new Date(b.date) - new Date(a.date);
            });

            const container = document.getElementById('blog-posts');
            posts.forEach((post, index) => {
                const article = document.createElement('article');
                article.className = `blog-post ${index % 2 === 0 ? 'even' : 'odd'}`;
                article.innerHTML = `
                    <h2 class="post-title">${post.title}</h2>
                    <p class="post-description">${post.description}</p>
                    <p class="post-date">${post.date}</p>
                `;
                container.appendChild(article);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));

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

