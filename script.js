
document.addEventListener('DOMContentLoaded', function () {
    const trackerElement = document.createElement('div');
    trackerElement.style.width = '50px';
    trackerElement.style.height = '50px';
    trackerElement.style.borderRadius = '50%';
    trackerElement.style.position = 'absolute';
    trackerElement.style.pointerEvents = 'none';
    trackerElement.style.background = 'radial-gradient(rgba(255, 255, 255, 0.05) 20%, transparent 70%)';
    trackerElement.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
    
    document.body.appendChild(trackerElement);

    document.addEventListener('mousemove', (e) => {
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        const xPos = e.clientX + scrollX;
        const yPos = e.clientY + scrollY;

        trackerElement.style.left = `${xPos}px`;
        trackerElement.style.top = `${yPos}px`;

        // Add light-emerging effect
        trackerElement.style.opacity = 10;
        trackerElement.style.transform = 'scale(10)';
    });

    document.addEventListener('mouseover', () => {
        // Show the div when the mouse is over the document
        trackerElement.style.opacity = 10;
        trackerElement.style.transform = 'scale(10)';
    });
});
