import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Telefone extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cliente_id: number

  @column()
  declare numero: string
}
