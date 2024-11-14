// Carrusel de imágenes
let currentImageIndex = 0;
const images = document.querySelectorAll(".carousel img");

function showNextImage() {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add("active");
}

setInterval(showNextImage, 3000);

// Función de vista previa rápida
function vistaPrevia() {
    alert("Vista previa del producto");
}

function agregarCarrito() {
    alert("Producto agregado al carrito");
}

document.getElementById("newsletter").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Gracias por suscribirte!");
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
