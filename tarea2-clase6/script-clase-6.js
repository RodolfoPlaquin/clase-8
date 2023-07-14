const $botonAgregarFamiliar = document.querySelector("#agregar-familiares");
const $formularioSalarios = document.querySelector("#formulario-salarios");
const $cantidadFamiliares = document.querySelector(
  "#cantidad-integrantes"
).value;
let contadorErrorSalario;
function crearFormulario(formulario, cantidadFamiliares) {
  formulario.innerHTML = "";

  for (let i = 1; i <= cantidadFamiliares; i++) {
    const $crearLabel = document.createElement("label");
    $crearLabel.textContent = `Salario de familiar N°${i} :`;

    const $crearInput = document.createElement("input");
    $crearInput.id = "salario-familiar" + i;
    $crearInput.name = "salarios";

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
  div.remove();
  button.remove();
  $cantidadFamiliares--;
  $mostrarResultado.innerHTML = "";
  if ($cantidadFamiliares === 0) $formularioSalarios.innerHTML = "";
}

function obtenerSalarios() {
  const salarios = [];
  contadorErrorSalario = 0;
  const $salarioInput = document.querySelectorAll("[name=salarios]");
  for (let i = 0; i < $cantidadFamiliares; i++) {
    const errorSalario = validarSalarios($salarioInput[i].value);
    if (errorSalario === "") {
      salarios.push(Number($salarioInput[i].value));
      $salarioInput[i].style.border = "";
    } else {
      $salarioInput[i].style.border = "1px red solid";
      alert(`Familiar N°${i + 1} : ${errorSalario}`);
      contadorErrorSalario++;
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

function calcularSalarioPromedio(salarios) {
  let sumadorSalarios = 0;
  salarios.forEach((salario) => {
    sumadorSalarios += salario;
  });

  const promedio = sumadorSalarios / salarios.length;
  return promedio;
}

function crearBotonCalcular(formulario) {
  if ($cantidadFamiliares > 0) {
    const $crearBotonCalcular = document.createElement("button");
    $crearBotonCalcular.id = "calcular-salarios";
    $crearBotonCalcular.textContent = "Calcular";
    formulario.appendChild($crearBotonCalcular);
  }
}

function calcularSalarios() {
  const $botonCalcular = document.querySelector("#calcular-salarios");
  $botonCalcular.onclick = function () {
    const salarios = obtenerSalarios();
    const salarioPromedio = calcularSalarioPromedio(salarios).toFixed(2);
    const salarioMaximo = calcularSalarioMaximo(salarios);
    const salarioMinimo = calcularSalarioMinimo(salarios);
    mostrarResultados(salarioPromedio, salarioMaximo, salarioMinimo);
    return false;
  };
}
function mostrarResultados(promedio, max, min) {
  const $mostrarResultado = document.querySelector("#mostrar-resultado");
  if (contadorErrorSalario === 0) {
    $mostrarResultado.innerHTML =
      "El salario promedio es: " +
      promedio +
      "<br>" +
      "El salario máximo es: " +
      max +
      "<br>" +
      "El salario mínimo es: " +
      min;
  } else {
    $mostrarResultado.innerHTML = "";
  }
}

$botonAgregarFamiliar.onclick = function () {
  const $errorIntegrantes = document.querySelector("#error-integrantes");
  const errorIntegrantes = validarCantidadIntegrantes($cantidadFamiliares);
  $errorIntegrantes.innerText = errorIntegrantes;

  if (errorIntegrantes === "") {
    crearFormulario($formularioSalarios, $cantidadFamiliares);
    crearBotonCalcular($formularioSalarios);
    calcularSalarios();
  } else {
    $formularioSalarios.innerHTML = "";
  }
  return false;
};
