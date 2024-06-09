document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('main-heading');
    const button = document.getElementById('animate-btn');
    const box = document.getElementById('animate-box');

    button.addEventListener('click', function() {
        heading.style.color = heading.style.color === 'red' ? '#333' : 'red';
        box.style.transform = box.style.transform === 'rotate(45deg)' ? 'rotate(0deg)' : 'rotate(45deg)';
        box.style.backgroundColor = box.style.backgroundColor === 'red' ? '#007bff' : 'red';
    });
});
