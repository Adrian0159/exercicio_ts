function multiplicar(altura: number, peso: number): number {
  return altura * peso;
}

function diserOla(nome: string): string {
  return `Olá ${nome}`;
}

const resultadoDaMultiplicacao = multiplicar(1.65, 55);
const pessoa = diserOla("Maria");

console.log(resultadoDaMultiplicacao);
console.log(pessoa);
