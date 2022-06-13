let cantidadTotal: number[] = new Array(270);
let menores: number = 0;
let mayores: number = 0;

function valorEdades(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let indice = 0; indice < 270; indice++) {
  cantidadTotal[indice] = valorEdades(18, 41);
  if (cantidadTotal[indice] >= 21) {
    mayores++;
  } else {
    menores++;
  }
}
console.log("La cantidad total de personas es: ", cantidadTotal);
console.log("La cantidad de personas MAYORES a 21 es:", mayores);
console.log("La cantidad de personas MENORES a 21", menores);
