import './style.css'
import 'react'

export default props => (
  <h1>Hello</h1>
)

// Importa a classe Pessoa
import Pessoa from './pessoa';

const pessoa = new Pessoa('Julian')
console.log(pessoa.toString())

// Testando a chamada do bundle.js
console.log('Webpack')

// Fazendo uma requisição ao arquivo logger
const logger = require('./logger')

// Usando a função do arquivo logger
logger.info('Usando o padrão CommonJS')

const produto = {
  nome: 'Caneta Bic Preta',
  preco: 1.90,
  desconto: 0.05
}

function clone(objeto) {
  return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'

console.log(produto, novoProduto)
