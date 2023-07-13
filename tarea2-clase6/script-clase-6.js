const $botonAgregarFamiliar = document.querySelector("#agregar-familiares");
const $formularioSalarios = document.querySelector("#formulario-salarios");
const $mostrarResultado = document.querySelector("#mostrar-resultado");
$cantidadFamiliares = document.querySelector("#cantidad-integrantes").value;
console.log($cantidadFamiliares);

function agregarFormulario(formulario, cantidadFamiliares) {
  formulario.innerHTML = "";

  for (let i = 1; i <= cantidadFamiliares; i++) {
    const $crearLabel = document.createElement("label");
    $crearLabel.textContent = `Salario de familiar N°${i} :`;

    const $crearInput = document.createElement("input");
    $crearInput.id = "salario-familiar" + i;

    const $crearBotonEliminarRegistro = document.createElement("button");
    $crearBotonEliminarRegistro.textContent = "Eliminar Registro";
    $crearBotonEliminarRegistro.addEventListener("click", () =>
      eliminarRegistro($crearLabel, $crearInput, $crearBotonEliminarRegistro)
    );

    formulario.appendChild($crearLabel);
    formulario.appendChild($crearInput);
    formulario.appendChild($crearBotonEliminarRegistro);
  }
}

function eliminarRegistro(label, input, button) {
  label.remove();
  input.remove();
  button.remove();
  $cantidadFamiliares--;
  $mostrarResultado.innerHTML = "";
  if ($cantidadFamiliares === 0) $formularioSalarios.innerHTML = "";
}

function obtenerSalarios() {
  const salarios = [];
  const salarioInput = document.querySelectorAll("input");
  for (let i = 1; i <= $cantidadFamiliares; i++) {
    console.log(Number(salarioInput[i].value));
    if (Number(salarioInput[i].value > 0)) {
      salarios.push(Number(salarioInput[i].value));
    }
  }
  return salarios;
}

function calcularSalarioMaximo(salarios) {
  return Math.max(...salarios);
}

function calcularSalarioMinimo(salarios) {
  return Math.min(...salarios);
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
  $mostrarResultado.innerHTML =
    "El salario promedio es: " +
    promedio +
    "<br>" +
    "El salario máximo es: " +
    max +
    "<br>" +
    "El salario mínimo es: " +
    min;
}

function botonCalcular(formulario) {
  if ($cantidadFamiliares > 0) {
    const $crearBotonCalcular = document.createElement("button");
    $crearBotonCalcular.id = "calcular-salarios";
    $crearBotonCalcular.textContent = "Calcular";
    formulario.appendChild($crearBotonCalcular);

    $crearBotonCalcular.onclick = function () {
      const salarios = obtenerSalarios();
      const salarioPromedio = calcularSalarioPromedio(salarios).toFixed(2);
      const salarioMaximo = calcularSalarioMaximo(salarios);
      const salarioMinimo = calcularSalarioMinimo(salarios);
      mostrarResultados(salarioPromedio, salarioMaximo, salarioMinimo);
      return false;
    };
  }
}

$botonAgregarFamiliar.onclick = function () {
  agregarFormulario($formularioSalarios, $cantidadFamiliares);
  if ($cantidadFamiliares > 0) {
    botonCalcular($formularioSalarios);
  }
  return false;
};
