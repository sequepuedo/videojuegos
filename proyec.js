let registrosJuegos = JSON.parse(localStorage.getItem("registro de juegos")) ?? [];

function registroJuegos(nombreJUego, tipo, año, precio) {
  const Rjuego = {
    id:Math.random().toString(36).substring(2) + Date.now().toString(36),
    nombreJUego,
    tipo,
    año,
    precio,
  };
  registrosJuegos.push(Rjuego);
  
}

document.querySelector("#contenedor").addEventListener("submit", (e) => {
  e.preventDefault;
  const nombre = document.querySelector("#nombre").value;
  const tipo = document.querySelector("#juego").value;
  const año = document.querySelector("#año").value;
  const precio = document.querySelector("#precio").value;
  registroJuegos(nombre, tipo, año, precio);
  localStorage.setItem("registro de juegos", JSON.stringify(registrosJuegos));
  document.queryselector("#contenedor").reset();
});
