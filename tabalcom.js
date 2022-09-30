let carr2 = JSON.parse(localStorage.getItem("productos")) ?? [];
lista();
function lista() {
  console.log(carr2)
  let tabla_producto = "";

  carr2.forEach((persona) => {
    tabla_producto += `
          <tr>
          <td>${persona.id}</td>
          <td>${persona.nombreJUego}</td>
          <td>${persona.precio}</td>
          <td>${persona.cantidad}</td>
          <td>${Number(persona.precio) * Number(persona.cantidad)}</td>
          

          </tr>
   `;
  });
  document.querySelector("#producto").innerHTML = tabla_producto;
}
function calculos(){
  for(i=0;i<carr2.length;i++){
console.log(carr2[i].precio);

  }

} 


document.querySelector("#d").addEventListener("submit", (e) => {
  e.preventDefault();
  const input=document.querySelector("#cantidad").value;
  console.log(input);
  console.log(input);
  console.log(input); 
  
 calculos();
 
  });



