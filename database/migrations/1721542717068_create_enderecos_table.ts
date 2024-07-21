import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'enderecos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('cliente_id')
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onDelete('CASCADE')
      table.string('logradouro', 255).notNullable()
      table.string('numero', 10).notNullable()
      table.string('complemento', 255)
      table.string('bairro', 255).notNullable()
      table.string('cidade', 255).notNullable()
      table.string('estado', 2).notNullable()
      table.string('cep', 9).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
