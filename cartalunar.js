let abierto = false;
let escribiendo = false;
let timeoutTexto = null;
const ancho = window.innerWidth;
const alto = window.innerHeight;

document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("estrellas-fondo");

    // ✨ estrellas normales
   for (let i = 0; i < 100; i++) {
    let estrella = document.createElement("div");
    estrella.className = "estrella";

    estrella.style.top = Math.random() * alto + "px";
    estrella.style.left = Math.random() * ancho + "px";

    contenedor.appendChild(estrella);
}

    // 🌠 fugaces
   setInterval(() => {
    const ancho = window.innerWidth;

    for (let i = 0; i < 2; i++) { // menos estrellas
        let estrella = document.createElement("div");
        estrella.className = "fugaz";

        estrella.style.left = Math.random() * ancho + "px";
        estrella.style.top = Math.random() * 200 + "px";

        contenedor.appendChild(estrella);

        setTimeout(() => estrella.remove(), 2000);
    }
}, 1500);

    // 📸 POPUP
    const imagenes = document.querySelectorAll(".galeria img");
    const popup = document.getElementById("popup");
    const imgPopup = document.getElementById("imgPopup");

    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            imgPopup.src = img.src;
            popup.classList.add("activo");
        });
    });

    window.cerrarPopup = () => popup.classList.remove("activo");

    popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.classList.remove("activo");
    });

});

/* 💌 máquina de texto */
function escribirTexto(texto, elemento) {
    let i = 0;
    escribiendo = true;

    function escribir() {
        if (!escribiendo) return; // 🔥 detener si se cancela

        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            timeoutTexto = setTimeout(escribir, 40);
        }
    }

    escribir();
}

/* 🌙 acción luna */
function abrirLuna() {

    const carta = document.getElementById("carta");
    const musica = document.getElementById("musica");
    const sonido = document.getElementById("sonido");
    const texto = document.getElementById("textoCarta");
const galeria = document.querySelector(".galeria");
    abierto = !abierto;

    if (abierto) {

    sonido.play();
    musica.play();

    // 🔥 cancelar escritura anterior si existía
    escribiendo = false;
    clearTimeout(timeoutTexto);

    setTimeout(() => {
        carta.classList.add("mostrar");

        texto.innerHTML = "";
        escribirTexto("Desde que te conocí, cada noche tiene más brillo… 🌙✨ porque sé que en algún lugar estás tú mirando la misma luna que yo. Te amo mucho mi lobita 🐺", texto);

    }, 1000);

    galeria.classList.add("mostrar");
    } else {
        // 🔥 detener escritura inmediatamente
    escribiendo = false;
    clearTimeout(timeoutTexto);

    carta.classList.remove("mostrar");
    galeria.classList.remove("mostrar");
    }
}