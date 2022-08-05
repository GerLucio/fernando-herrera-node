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

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((empleado) => empleado.id === id);
  if (empleado) {
    callback(null, empleado.nombre);
  } else {
    callback(`No existe el empleado con el id ${id}`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((salario) => salario.id === id);
  if (salario) {
    callback(null, salario.salario);
  } else {
    callback(`No existe el salario para el empleado con el id ${id}`);
  }
};

const id = 4;

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log("Hubo un error");
    console.log(err);
    return;
  }
  console.log("todo bien");
  console.log(empleado);
});

getSalario(id, (err, salario) => {
  if (err) {
    console.log("Hubo un error");
    console.log(err);
    return;
  }
  console.log("todo bien");
  console.log(salario);
});
