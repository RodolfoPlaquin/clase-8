const $botonAgregarFamiliar = document.querySelector('#agregar-familiar');
const $generarFormulario = document.querySelector('#formulario-salarios');
const $mostrarResultado = document.querySelector('#mostrar-resultado');

let cantidadFamiliares = 0;

function agregarFormulario(formulario) {
    formulario.innerHTML = "";

    for (let i = 1; i <= cantidadFamiliares; i++) {
        const $crearLabel = document.createElement('label');
        $crearLabel.textContent = `Salario de familiar N°${i} :`;

        const $crearInput = document.createElement('input');
        $crearInput.id = "salario-familiar" + i;
        $crearInput.type = "number";

        const $crearBotonEliminarRegistro = document.createElement('button');
        $crearBotonEliminarRegistro.textContent = "Eliminar Registro";
        $crearBotonEliminarRegistro.addEventListener('click', () => eliminarRegistro($crearLabel, $crearInput, $crearBotonEliminarRegistro));

        formulario.appendChild($crearLabel);
        formulario.appendChild($crearInput);
        formulario.appendChild($crearBotonEliminarRegistro);
    }
}

function eliminarRegistro(label, input, button) {
    label.remove();
    input.remove();
    button.remove();
    cantidadFamiliares--;
    $mostrarResultado.innerHTML = "";
    if (cantidadFamiliares === 0)
        $generarFormulario.innerHTML = "";
}

function botonCalcular(formulario) {
    if (cantidadFamiliares > 0) {
        const $crearBotonCalcular = document.createElement('button');
        $crearBotonCalcular.id = "calcular-salarios";
        $crearBotonCalcular.textContent = "Calcular";
        formulario.appendChild($crearBotonCalcular);

        $crearBotonCalcular.onclick = function () {
            const salarios = arraySalarios();
            const salarioPromedio = calcularSalarioPromedio(salarios).toFixed(2);
            const salarioMaximo = Math.max(...salarios);
            const salarioMinimo = Math.min(...salarios);
            mostrarResultados(salarioPromedio, salarioMaximo, salarioMinimo);
            return false;
        };
    }
}

function arraySalarios() {
    const arraySalarios = [];
    const salarioInput = document.querySelectorAll("input");
    for (let i = 0; i < cantidadFamiliares; i++) {
        const salario = Number(salarioInput[i].value);
        if (salario > 0) {
            arraySalarios.push(salario);
        }
    }
    return arraySalarios;
}

function calcularSalarioPromedio(arraySalarios) {
    let sumadorSalarios = 0;
    for (let i = 0; i < arraySalarios.length; i++) {
        sumadorSalarios += arraySalarios[i];
    }
    const promedio = sumadorSalarios / arraySalarios.length;
    return promedio;
}

function mostrarResultados(promedio, max, min) {
    $mostrarResultado.innerHTML = "El salario promedio es: " + promedio + "<br>" +
        "El salario máximo es: " + max + "<br>" +
        "El salario mínimo es: " + min;
}

$botonAgregarFamiliar.onclick = function () {
    cantidadFamiliares++;
    agregarFormulario($generarFormulario);
    if (cantidadFamiliares > 0) {
        botonCalcular($generarFormulario);
    }
    return false;
};
