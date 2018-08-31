// Avisa que a classe Pessoa será importada
export default class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
  toString() {
    return `Pessoa: ${this.nome}`
  }
}
