let carr2 = JSON.parse(localStorage.getItem("productos")) ?? [];
let registros = JSON.parse(localStorage.getItem("registro de juegos")) ?? [];

lista();
function editarcant(id){
  let cantidadN= prompt ("dijite la nueva cantidad");
  let traerindex=registros.findIndex(Element=>Element.id==id);
    carr2.map((N) => {
      if (N.id == id) {
        N.cantidad =cantidadN;
        if( N.cantidad==1){
          N.cantidad = cantidadN;
          N.precio= registros[traerindex].precio;
         
        }else{
          N.precio=Number(cantidadN*carr2[traerindex].precio).toFixed(3);

        }
        return N;  

      }   
     
    }); 

    localStorage.setItem("productos",JSON.stringify(carr2));
    lista();
 
} 
function elemi_pro(Id) {
 
 let traerindex=carr2.findIndex(Element=>Element.id==Id);
carr2.splice(traerindex, 1);
document.getElementById("m").innerHTML="no hay productos";
 localStorage.setItem("productos",JSON.stringify(carr2));
    lista();
 
} 
function lista() {
  //console.log(carr2);
  let tabla_producto = "";

  carr2.forEach((persona) => {
    tabla_producto += `
          <tr class="container text-center ">
          
          <td>${persona.nombreJUego}</td>
          <td>${persona.precio}</td>
          <td>${Number(persona.cantidad)}</td>
          <td><button type="button" class="btn btn-outline-dark" onclick="editarcant('${(persona.id)}')"> cantidad </button> </td>
          <td><button id="eli" type="button" class="btn btn-outline-dark" onclick="elemi_pro('${(persona.id)}')">producto </button> </td>
     
          </tr>
          
   `;
  });
 
  document.querySelector("#producto").innerHTML = tabla_producto;
 
}
function agregarelemtos() {
const guardaprecio=[];
const precio= JSON.parse(localStorage.getItem("productos")) ?? [];
for(i=0;i<precio.length;i++){

    let guardar=Number(precio[i].precio);
    guardaprecio.push(guardar);
    
}
let suma=guardaprecio.reduce((acomulador,numero)=>acomulador+numero);
  console.log(suma);
  console.log(guardaprecio);
  let simbolo="$:"
  document.getElementById("m").innerHTML=simbolo + suma; 
}
document.getElementById("e").onclick=function(){

  agregarelemtos(); 

}





