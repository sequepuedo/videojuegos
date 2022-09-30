let registrosJuegos=JSON.parse(localStorage.getItem("registro de juegos")) ?? [];
let carr2=JSON.parse(localStorage.getItem("productos")) ?? [];
lista_juegos();
function carrito(ID) {

  const buscar= registrosJuegos.find((busca) => {
    return  busca.id==ID;
  });

  buscar.cantidad=1;
  carr2.push(buscar); //correc

  // carr2 = buscar;
  
    //carr2.push(carr); //No es necesario
  localStorage.setItem("productos",JSON.stringify(carr2));
  
}


function lista_juegos() {
  let tabla_juegos = "";
  registrosJuegos.forEach((element) => {
    tabla_juegos += `
   
    <div class="container text-center ">
      <div class="row align-items-start">
        <div class="col">
      <div id="e">
        <div class="card" style="width: 18rem;" id="a">
        <img class="card-img-top" src="./zx.jpg" alt="Card image cap">
        <div class="card-body">
          <h5> informacion del juego</h5>
          <p class="card-text">
          NOMBRE =>   ${element.nombreJUego}</p>
          <p> TIPO=>  ${element.tipo}
          </p>
          <p> año=>   ${element.año}
          </p>
          <p> precio=> ${element.precio}
          </p> 
          <p><button type="button" class="btn btn-outline-dark" onclick="carrito('${element.id}')">añadir al carrito</
          button>
          <p/>
          </div>
          </div>
       </div>
       </div>
       </div>
    </div>  
 `;

  });
  document.querySelector("#informacion").innerHTML = tabla_juegos;
  
}

