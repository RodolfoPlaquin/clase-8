const $botonCrearFormulario = document.querySelector('#generar-formulario');

$botonCrearFormulario.onclick = function (){
    const cantidadMiembros = Number(document.querySelector('#cantidad-miembros-familia').value);
    generarFormulario( cantidadMiembros );
    
    const $botonCalcularEdades = document.querySelector('#calcular-edad');
    $botonCalcularEdades.onclick = function () {
        const edadesFamiliares = arrayEdades (cantidadMiembros);
        const edadPromedio = calcularEdadPromedio ( edadesFamiliares );
        const edadMayor = Math.max(...edadesFamiliares);
        const edadMenor = Math.min(...edadesFamiliares);
    
        mostrarEdades (edadMenor, edadMayor , edadPromedio);

        const $botonLimpiar = document.querySelector('#limpiar-formulario');
        $botonLimpiar.onclick = function(){
            const $cantidadMiembros = document.querySelector('#cantidad-miembros-familia');
            $cantidadMiembros.value = "";

            const $mostraredad = document.querySelector('#mostrar-resultados');
            $mostraredad.style.display = 'none';
            
            const $formularioGenerado = document.querySelector('#formulario-calculos');
            $formularioGenerado.innerHTML = "";

            return false;
        }
        return false;
    }
    return false;
}
    
function generarFormulario ( cantidad ){
    const $formularioGenerado = document.querySelector('#formulario-calculos');
    $formularioGenerado.innerHTML = "";

    for(let i = 1 ; i<=cantidad ; i++){
        const crearLabel = document.createElement("label");
        crearLabel.textContent = "Edad persona N°" + i + " :";
        
        const crearInput = document.createElement("input");
        crearInput.type = "number";
        crearInput.id = "edadFamiliar" + i;

        $formularioGenerado.appendChild(crearLabel);
        $formularioGenerado.appendChild(crearInput);
    }

    const crearBotonCalcular = document.createElement("button");
    crearBotonCalcular.id = "calcular-edad";
    crearBotonCalcular.textContent = "Calcular";
    $formularioGenerado.appendChild(crearBotonCalcular);

    const mostrarResultado = document.createElement("div");
    mostrarResultado.id = "mostrar-resultados";
    $formularioGenerado.appendChild(mostrarResultado);

    const crearBotonLimpiar = document.createElement("button");
    crearBotonLimpiar.id = "limpiar-formulario";
    crearBotonLimpiar.textContent = "Limpiar";
    $formularioGenerado.appendChild(crearBotonLimpiar);
}

function arrayEdades ( cantidad ){
    let arrayEdades = [];
    console.log(arrayEdades);
    for(let i = 1 ; i<=cantidad ; i++){
        const $edad = Number(document.querySelector("#edadFamiliar" + i).value);
        arrayEdades.push($edad);
    }
    return arrayEdades;
}

function calcularEdadPromedio ( arrayEdades ){
    let sumatoriaEdades = 0;
    for(let i = 0 ; i<arrayEdades.length ; i++){
        sumatoriaEdades += arrayEdades[i];
    }
    const promedioEdades = sumatoriaEdades / arrayEdades.length;
    return promedioEdades;
}

function mostrarEdades (min , max , promedio ){
    const $mostraredad = document.querySelector('#mostrar-resultados');
    $mostraredad.innerHTML = "Edad menor : " + min + "<br>" +
                             "Edad mayor : " + max + "<br>" +
                             "Edad promedio : " + promedio;
}