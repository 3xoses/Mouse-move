const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function () {
    h1.textContent = `${event.clientX}, ${event.clientY}`;

    document.body.style.backgroundColor = `rgb(${event.clientX}, ${event.clientY}, 100)`;
})