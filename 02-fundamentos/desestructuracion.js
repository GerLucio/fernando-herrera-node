const deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "regeneración",
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

console.log(deadpool.getNombre());

const { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);

const imprimeHeroe = ({ nombre, apellido, poder, edad = 50 }) => {
  console.log(nombre, apellido, poder, edad);
};

imprimeHeroe(deadpool);

const heroes = ["Batman", "Superman", "Iron Man"];

const [heroe1, heroe2, heroe3] = heroes;

console.log(heroe1, heroe2, heroe3);
