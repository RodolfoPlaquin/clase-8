function validarCantidadFamiliares(cantidad) {
  if (cantidad.length === 0) {
    return "El campo no debe estar vacío";
  }

  if (!/^[0-9]\d*$/.test(cantidad)) {
    return "La cantidad solo puede tener números enteros";
  }

  if (cantidad < 1) {
    return "La cantidad no debe ser menor a 1";
  }

  if (cantidad > 5) {
    return "La cantidad no debe ser mayor a 5";
  }

  return "";
}

function validarSalarios() {
  const $form = document.querySelector("#formulario-calculos");
  $form.forEach();
}
