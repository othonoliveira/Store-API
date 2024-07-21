import Cliente from '#models/cliente'
import Venda from '#models/venda'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClientesController {
  async index({}: HttpContext) {
    const clientes = await Cliente.all()
    return clientes.reverse()
  }

  async show({ params }: HttpContext) {
    const cliente = await Cliente.findByOrFail('id', params.id)
    const vendas = await Venda.findManyBy('cliente_id', params.id)
    return { cliente, vendas }
  }

  async add({ request }: HttpContext) {
    const cliente = await Cliente.create(request.body())
    return { message: 'Cliente adicionado', cliente: cliente.$original }
  }

  async update({ request, params: id }: HttpContext) {
    const cliente = await Cliente.updateOrCreate(id, request.body())
    return { message: 'Cliente alterado', cliente: cliente }
  }
  async delete({ params }: HttpContext) {
    const cliente = await Cliente.findBy('id', params.id)
    const vendas = await Venda.findManyBy('cliente_id', params.id)
    await Cliente.query().where('id', params.id).returning(['id', 'name', 'CPF']).del()
    return { message: 'Cliente removido', cliente, vendas }
  }
}
