function validarCantidadIntegrantes() {
  if ($cantidadFamiliares === "") {
    return "El campo cantidad de integrantes no debe estar vacío";
  }

  if (!/^[0-9]\d*$/.test($cantidadFamiliares)) {
    return "La cantidad de integrantes debe ser un número entero";
  }

  if ($cantidadFamiliares > 5) {
    return "La cantidad de integrantes no debe ser mayor a 5";
  }

  if ($cantidadFamiliares < 1) {
    return "La cantidad de integrantes no debe ser menor a 1";
  }

  return "";
}

function validarSalarios(salario) {
  if (salario === "") {
    return "El campo salario no debe estar vacío";
  }

  if (!/^[0-9]\.*$/.test(salario)) {
    return "El salario debe ser un número";
  }

  if (salario > 10000) {
    return "El salario no debe ser mayor a 10000";
  }

  if (salario < 500) {
    return "El salario no debe ser menor a 500";
  }

  return "";
}
