import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vendas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('cliente_id')
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onDelete('CASCADE')
      table
        .integer('produto_id')
        .unsigned()
        .references('id')
        .inTable('produtos')
        .onDelete('CASCADE')
      table.integer('quantidade').unsigned().notNullable()
      table.decimal('preco_unitario', 12, 2).notNullable()
      table.decimal('preco_total', 12, 2).notNullable()
      table.timestamp('data_hora')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
