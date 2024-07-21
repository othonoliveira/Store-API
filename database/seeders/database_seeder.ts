import Cliente from '#models/cliente'
import Endereco from '#models/endereco'
import Produto from '#models/produto'
import Telefone from '#models/telefone'
import Usuario from '#models/usuario'
import Venda from '#models/venda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Usuario.createMany([
      { email: 'joao.silva@example.com', senha: 'senha123' },
      { email: 'maria.oliveira@example.com', senha: 'senha456' },
    ])

    await Cliente.createMany([
      { nome: 'João da Silva', CPF: '123.456.789-00' },
      { nome: 'Maria de Oliveira', CPF: '987.654.321-00' },
    ])

    await Endereco.createMany([
      {
        cliente_id: 1,
        logradouro: 'Av. Paulista',
        numero: '1000',
        complemento: 'Apt 101',
        bairro: 'Bela Vista',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01310-000',
      },
      {
        cliente_id: 1,
        logradouro: 'Rua Augusta',
        numero: '500',
        bairro: 'Consolação',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01305-000',
      },
      {
        cliente_id: 2,
        logradouro: 'Av. Atlântica',
        numero: '2000',
        complemento: 'Apt 202',
        bairro: 'Copacabana',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        cep: '22021-001',
      },
    ])

    await Telefone.createMany([
      { cliente_id: 1, numero: '(11) 91234-5678' },
      { cliente_id: 1, numero: '(11) 99876-5432' },
      { cliente_id: 2, numero: '(21) 92345-6789' },
    ])

    await Produto.createMany([
      {
        nome: 'Cafeteira Elétrica',
        descricao: 'Cafeteira elétrica de 10 xícaras',
        preco: 99.9,
        estoque: 50,
      },
      {
        nome: 'Smartphone XYZ',
        descricao: 'Smartphone com 128GB de memória',
        preco: 1999.9,
        estoque: 30,
      },
      {
        nome: 'Fone de Ouvido Bluetooth',
        descricao: 'Fone de ouvido sem fio com microfone',
        preco: 150.0,
        estoque: 75,
      },
    ])

    await Venda.createMany([
      {
        cliente_id: 1,
        produto_id: 1,
        quantidade: 1,
        preco_unitario: 99.9,
        preco_total: 99.9,
      },
      {
        cliente_id: 1,
        produto_id: 2,
        quantidade: 1,
        preco_unitario: 1999.9,
        preco_total: 1999.9,
      },
      {
        cliente_id: 2,
        produto_id: 3,
        quantidade: 2,
        preco_unitario: 150.0,
        preco_total: 300.0,
      },
    ])
  }
}
