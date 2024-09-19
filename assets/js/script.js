let listaNombresGastos = [];
let listaValoresGastos = []; 

//esta funcion se invoca al momento de que el usuario hace clic en el 
//boton

function clickBoton () {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
       //alert('click de usuario');
       actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElemento = document.getElementById('totalGastos');
    let htmlLista='';
    let totalGastos = 0;
    listaNombresGastos.forEach( (elemento,posicion) => {
        const valorGasto = Number(listaValoresGastos [posicion]);

        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} 
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        </li>`;
         //calculamos el total de gastos 
        totalGastos += Number (valorGasto);
        console.log (totalGastos);


       // console.log(elemento);
        //console.log(posicion);
        
    });
    //console.log(htmlLista);

    listaElementos.innerHTML = htmlLista;
    totalElemento.innerHTML = totalGastos.toFixed(2);
    limpiar();
}
function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = ''; 

}

function eliminarGasto(posicion) {
  //(se uso para verificar la eliminacion de la lista)  console.log(posicion);
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}