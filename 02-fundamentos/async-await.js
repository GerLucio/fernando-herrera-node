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

const getInfoEmpleado = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `El empleado ${empleado} tiene un salario de ${salario}`;
  } catch (error) {
    throw error;
  }
};

const id = 27;

getInfoEmpleado(id)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => console.log(err));
