const empleados = [
  {
    id: 1,
    nombre: "Juan",
  },
  {
    id: 2,
    nombre: "Pancho",
  },
  {
    id: 3,
    nombre: "Juana",
  },
  {
    id: 4,
    nombre: "Paquito",
  },
];

const salarios = [
  {
    id: 1,
    salario: 34645,
  },
  {
    id: 2,
    salario: 56454,
  },
  {
    id: 3,
    salario: 45435,
  },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((empleado) => empleado.id === id);

    empleado
      ? resolve(empleado.nombre)
      : reject(`No existe el empleado con el id ${id}`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((salario) => salario.id === id);

    salario
      ? resolve(salario.salario)
      : reject(`No existe un salario para el empleado con el id ${id}`);
  });
};

const id = 1;

// getEmpleado(id)
//   .then((empleado) => console.log(empleado))
//   .catch((err) => console.log(err));

// getSalario(id)
//   .then((salario) => console.log(salario))
//   .catch((err) => console.log(err));

// getEmpleado(id)
//   .then((empleado) => {
//     console.log(empleado);
//     getSalario(id)
//       .then((salario) => console.log(salario))
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

let nombreEmpleado;
getEmpleado(id)
  .then((empleado) => {
    nombreEmpleado = empleado;
    return getSalario(id);
  })
  .then((salario) => {
    console.log(`El empleado ${nombreEmpleado} tiene un salario de ${salario}`);
  })
  .catch((err) => console.log(err));
