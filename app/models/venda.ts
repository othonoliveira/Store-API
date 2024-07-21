import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cliente_id: number

  @column()
  declare produto_id: number

  @column()
  declare quantidade: number

  @column()
  declare preco_unitario: number

  @column()
  declare preco_total: number

  @column.dateTime({ autoCreate: true })
  declare data_hora: DateTime
}
