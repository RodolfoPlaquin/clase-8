function validarCantidadFamiliares(cantidad) {
  console.log(cantidad);
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

function validarEdades(edad) {
  if (edad === "") {
    return "El campo edad no debe estar vacío";
  }

  if (Number(edad) < 0) {
    return "La edad no debe ser menor a 0";
  }

  if (Number(edad) > 110) {
    return "La edad no debe ser mayor a 110";
  }

  if (!/^\d*$/.test(edad)) {
    return "La edad solo debe llevar números enteros";
  }
  return "";
}
