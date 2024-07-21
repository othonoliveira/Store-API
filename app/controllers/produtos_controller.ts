import Produto from '#models/produto'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProdutosController {
  async index({}: HttpContext) {
    const produtos = await Produto.query().select('id', 'nome', 'preco').orderBy('nome')
    return produtos
  }

  async show({ params }: HttpContext) {
    const produto = await Produto.query().select().where('id', params.id)
    return produto
  }

  async store({ request }: HttpContext) {
    const produto = await Produto.create(request.only(['nome', 'descricao', 'preco', 'estoque']))
    return { message: 'Produto Adicionado', produto }
  }

  async update({ request, params: id }: HttpContext) {
    const produto = await Produto.updateOrCreate(id, request.body())
    return { message: 'Produto Alterado', produto }
  }

  async delete({ params }: HttpContext) {
    const produto = await Produto.findByOrFail('id', params.id)
    produto.delete()
    return { message: 'Produto Removido', produto }
  }
}
