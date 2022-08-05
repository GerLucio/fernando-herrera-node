const getUserById = (id, callback) => {
  const usuario = {
    id,
    nombre: "Juan",
  };

  setTimeout(() => {
    callback(usuario);
  }, 1000);
};

getUserById(10, (usuario) => {
    console.log(usuario);
});
