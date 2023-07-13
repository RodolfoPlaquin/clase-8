function probarValidarCantidadFamiliares() {
  console.assert(
    validarCantidadFamiliares("") ===
      "El campo cantidad familiares no debe estar vacío",
    "validarCantidadFamiliares no validó que el campo está vacío"
  );

  console.assert(
    validarCantidadFamiliares(7) ===
      "La cantidad de familiares no debe ser mayor a 5",
    "validarCantidadFamiliares no validó que el valor no sea mayor a 5"
  );

  console.assert(
    validarCantidadFamiliares(0) ===
      "La cantidad de familiares no debe ser menor a 1",
    "validarCantidadFamiliares no validó que el valor no sea menor a 1"
  );

  console.assert(
    validarCantidadFamiliares(34.32) ===
      "El campo cantidad familiares solo debe ser un número entero",
    "validarCantidadFamiliares no validó que el campo solo debe tenga un número entero"
  );
}

function probarValidarEdades() {
  console.assert(
    validarEdades("") === "El campo edad no debe estar vacío",
    "validarEdades no validó que el campo no fuera vacío"
  );

  console.assert(
    validarEdades(-1) === "La edad no debe ser menor a 0",
    "validarEdades no validó que la edad no sea menor a 0"
  );

  console.assert(
    validarEdades(324) === "La edad no debe ser mayor a 110",
    "validarEdades no validó que la edad no sea mayor a 110"
  );

  console.assert(
    validarEdades(32.4) === "La edad solo debe llevar números enteros",
    "validarEdades no validó que la edad solo tenga números enteros"
  );
}

probarValidarCantidadFamiliares();
probarValidarEdades();
