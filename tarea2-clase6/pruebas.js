function probarValidarCantidadIntegrantes() {
  console.assert(
    validarCantidadIntegrantes("") ===
      "El campo cantidad de integrantes no debe estar vacío",
    "El campo cantidad de integrantes no validó que el campo no debe estar vacío"
  );

  console.assert(
    validarCantidadIntegrantes("asdas") ===
      "La cantidad de integrantes debe ser un número entero",
    "El campo cantidad de integrantes no validó que el campo no debe tener un número entero"
  );

  console.assert(
    validarCantidadIntegrantes(243) ===
      "La cantidad de integrantes no debe ser mayor a 5",
    "El campo cantidad de integrantes no validó que el campo no debe tener un número mayor a 5"
  );

  console.assert(
    validarCantidadIntegrantes(0) ===
      "La cantidad de integrantes no debe ser menor a 1",
    "El campo cantidad de integrantes no validó que el campo no debe tener un menor a 1"
  );
}

function probarValidarSalarios(salario) {
  console.assert(
    validarSalarios("") === "El campo salario no debe estar vacío",
    "validarSalarios no validó que el campo no debe estar vacío"
  );

  console.assert(
    validarSalarios("asdas") === "El salario debe ser un número",
    "validarSalarios no validó que el dato ingresado debe ser un número"
  );

  console.assert(
    validarSalarios(44243) === "El salario no debe ser mayor a 10000",
    "validarSalarios no validó que el valor no debe tener un mayor a 10000"
  );

  console.assert(
    validarSalarios(43) === "El salario no debe ser menor a 500",
    "validarSalarios no validó que el valor no debe tener un menor a 500"
  );
}

probarValidarCantidadIntegrantes();
probarValidarSalarios();
