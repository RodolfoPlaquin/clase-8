const $botonAgregarFamiliar = document.querySelector("#agregar-familiares");
const $formularioSalarios = document.querySelector("#formulario-salarios");
const $mostrarResultado = document.querySelector("#mostrar-resultado");
$cantidadFamiliares = Number(
  document.querySelector("#cantidad-integrantes").value
);
function agregarFormulario(formulario, cantidadFamiliares) {
  formulario.innerHTML = "";

  for (let i = 1; i <= cantidadFamiliares; i++) {
    const $crearLabel = document.createElement("label");
    $crearLabel.textContent = `Salario de familiar N°${i} :`;

    const $crearInput = document.createElement("input");
    $crearInput.id = "salario-familiar" + i;

    const $divError = document.createElement("div");
    $crearInput.id = "error-salario" + i;
    $crearInput.className = "errores";

    const $crearBotonEliminarRegistro = document.createElement("button");
    $crearBotonEliminarRegistro.textContent = "Eliminar Registro";
    $crearBotonEliminarRegistro.addEventListener("click", () =>
      eliminarRegistro(
        $crearLabel,
        $crearInput,
        $divError,
        $crearBotonEliminarRegistro
      )
    );

    formulario.appendChild($crearLabel);
    formulario.appendChild($crearInput);
    formulario.appendChild($crearBotonEliminarRegistro);
  }
}

function eliminarRegistro(label, input, div, button) {
  label.remove();
  input.remove();
  div.remove();
  button.remove();
  cantidadFamiliares--;
  $mostrarResultado.innerHTML = "";
  if (cantidadFamiliares === 0) $generarFormulario.innerHTML = "";
}

function botonCalcular(formulario) {
  if ($cantidadFamiliares > 0) {
    const $crearBotonCalcular = document.createElement("button");
    $crearBotonCalcular.id = "calcular-salarios";
    $crearBotonCalcular.textContent = "Calcular";
    formulario.appendChild($crearBotonCalcular);

    $crearBotonCalcular.onclick = function () {
      const salarios = obtenerSalarios();
      const salarioPromedio = salarioPromedio(salarios).toFixed(2);
      const salarioMaximo = salarioMaximo(salarios);
      const salarioMinimo = salarioMinimo(salarios);
      mostrarResultados(salarioPromedio, salarioMaximo, salarioMinimo);
      return false;
    };
  }
}

function obtenerSalarios() {
  const salarios = [];
  const salarioInput = document.querySelectorAll("input");
  for (let i = 0; i < cantidadFamiliares; i++) {
    if (salarioInput[i].value > 0) {
      salarios.push(salarioInput[i].value);
    }
  }
  return salarios;
}

function salarioMaximo(salarios) {
  return Math.max(...salarios);
}

function salarioMinimo(salarios) {
  return Math.min(...salarios);
}

function salarioPromedio(arraySalarios) {
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

$botonAgregarFamiliar.onclick = function () {
  agregarFormulario($formularioSalarios, $cantidadFamiliares);
  if ($cantidadFamiliares > 0) {
    botonCalcular($formularioSalarios);
  }
  return false;
};
