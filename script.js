document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('feed-container');
    const images = ['inst-3.png', 'inst-5.png', 'inst-7.png'];

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = `images/${image}`;
        container.appendChild(img);
    });
});
