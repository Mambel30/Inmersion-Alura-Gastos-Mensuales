let listaNombresGastos = [];
let listaValoresGastos = []; 
let listaDescripcion = [];
let indexUpdate = -1;

//esta funcion se invoca al momento de que el usuario hace clic en el 
//boton

function clickBoton () {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    if(Number(valorGasto) > 200){
        alert('El valor del gasto es mayor a $200');

        console.log(descripcionGasto);
    }
if (indexUpdate == -1){

    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcion.push(descripcionGasto);
    actualizarListaGastos();
}else{
    listaNombresGastos[indexUpdate] = (nombreGasto);
    listaValoresGastos[indexUpdate] = (valorGasto);
    listaDescripcion [indexUpdate] = (descripcionGasto);
    actualizarListaGastos(); 

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
       //alert('click de usuario');
       actualizarListaGastos();
}
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElemento = document.getElementById('totalGastos');
    let htmlLista='';
    let totalGastos = 0;
    listaNombresGastos.forEach( (elemento,posicion) => {
        const valorGasto = Number(listaValoresGastos [posicion]);
        const descripcionGasto = listaDescripcion[posicion];

        htmlLista += `<li> <p>${elemento} - USD ${valorGasto.toFixed(2)} 
        <br><span class="descripcion"> Descripcion: ${descripcionGasto} </span> </p>
        <button onclick="eliminar(${posicion});">Eliminar</button>
        <button onclick="editar(${posicion});">Actualizar</button>
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
    document.getElementById('descripcionGasto').value = '';
    indexUpdate= -1;
    document.getElementById("botonFormulario").innerText = "Agregar Gasto";

}

function eliminar(posicion) {
  //(se uso para verificar la eliminacion de la lista)  console.log(posicion);
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}
function editar(posicion){
    indexUpdate = posicion;
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcion[posicion];
    document.getElementById('botonFormulario').innertext = "Actualixar";

}

//crear una alerta de gastos con montos mayores 
// agregar un campo descripcion del gasto
// agregar un boton de modificar o actualizar gastos