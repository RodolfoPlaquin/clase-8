let contadorErrores;

function crearInputs(cantidad) {
  const $form = document.querySelector("#formulario-calculos");
  $form.innerHTML = "";

  for (let i = 1; i <= cantidad; i++) {
    const crearLabel = document.createElement("label");
    crearLabel.textContent = "Edad persona N°" + i + " :";

    const crearInput = document.createElement("input");
    crearInput.name = "edad-familiar";

    const crearDiv = document.createElement("div");
    crearDiv.id = "error-familiar" + i;
    crearDiv.className = "error-familiar";

    $form.appendChild(crearLabel);
    $form.appendChild(crearInput);
    $form.appendChild(crearDiv);
  }

  crearBotones($form);
}

function crearBotones(form) {
  const crearBotonCalcular = document.createElement("button");
  crearBotonCalcular.id = "calcular-edad";
  crearBotonCalcular.textContent = "Calcular";
  form.appendChild(crearBotonCalcular);

  const mostrarResultado = document.createElement("div");
  mostrarResultado.id = "mostrar-resultados";
  form.appendChild(mostrarResultado);

  const crearBotonLimpiar = document.createElement("button");
  crearBotonLimpiar.id = "limpiar-formulario";
  crearBotonLimpiar.textContent = "Limpiar";
  form.appendChild(crearBotonLimpiar);
}

function botonLimpiar() {
  const $botonLimpiar = document.querySelector("#limpiar-formulario");
  $botonLimpiar.onclick = function () {
    limpiarFormulario();
    return false;
  };
}

function limpiarFormulario() {
  const $inputCantidadMiembros = document.querySelector(
    "#cantidad-miembros-familia"
  );
  $inputCantidadMiembros.value = "";

  const $mostraredad = document.querySelector("#mostrar-resultados");
  $mostraredad.style.display = "none";

  const $formularioGenerado = document.querySelector("#formulario-calculos");
  $formularioGenerado.innerHTML = "";
}

function edadesFamiliares() {
  let edades = [];
  $edades = document.querySelectorAll("[name=edad-familiar]");
  $edades.forEach((edad) => {
    edades.push(edad.value);
  });
  return edades;
}

function errorEdades(edad) {
  contadorErrores = 0;
  for (let i = 0; i < edad.length; i++) {
    error = validarEdades(edad[i]);
    $mostrarErrores = document.querySelector("#error-familiar" + (i + 1));
    $mostrarErrores.innerText = error;
    if (error.length !== 0) {
      contadorErrores++;
    }
  }
}

function botonCalcular(cantidad) {
  const $botonCalcularEdades = document.querySelector("#calcular-edad");
  $botonCalcularEdades.onclick = function () {
    edades = edadesFamiliares();
    console.log(edades);
    errorEdades(edades);
    const edadPromedio = calcularEdadPromedio(edades);
    const edadMayor = Math.max(...edades);
    const edadMenor = Math.min(...edades);
    mostrarEdades(edadMenor, edadMayor, edadPromedio);
    botonLimpiar(cantidad);
    return false;
  };
}

function calcularEdadPromedio(edades) {
  let sumatoriaEdades = 0;
  edades.forEach((edad) => {
    sumatoriaEdades += Number(edad);
    console.log(sumatoriaEdades);
  });

  const promedioEdades = sumatoriaEdades / edades.length;
  return promedioEdades;
}

function mostrarEdades(min, max, promedio) {
  const $mostraredad = document.querySelector("#mostrar-resultados");
  if (contadorErrores === 0) {
    $mostraredad.innerHTML =
      "Edad menor : " +
      min +
      "<br>" +
      "Edad mayor : " +
      max +
      "<br>" +
      "Edad promedio : " +
      promedio;
  } else {
    $mostraredad.innerHTML = "";
  }
}

const $botonCrearFormulario = document.querySelector("#generar-formulario");
$botonCrearFormulario.onclick = function () {
  const cantidadMiembros = document.querySelector(
    "#cantidad-miembros-familia"
  ).value;

  const $errorFamiliares = validarCantidadFamiliares(cantidadMiembros);
  const $mostrarErrorFamiliares = document.querySelector(
    "#error-cantidad-familiares"
  );

  if ($errorFamiliares !== "") {
    $mostrarErrorFamiliares.textContent = $errorFamiliares;
    limpiarFormulario();
  } else {
    $mostrarErrorFamiliares.textContent = "";
    crearInputs(Number(cantidadMiembros));
    botonCalcular(Number(cantidadMiembros));
    botonLimpiar();
  }

  return false;
};
