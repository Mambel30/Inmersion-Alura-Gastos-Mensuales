//Variables
let numeroMaximoPosible = 1000;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
let maximosIntentos = 10;
while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(typeof(numeroUsuario));
    /*
    este codigo 
    realiza la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Alerta de acierto
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else { 
        if (numeroUsuario > numeroSecreto) { 
            alert('El numero secreto es menor');
        } else{
            alert('El numero secreto es mayor');
        }
        //Incrementamos el contador cuando la persona no acierta 
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
        }
        //Alerta de condición no cumplida
       // alert ('Lo siento no acertaste el numero');
    }
}
