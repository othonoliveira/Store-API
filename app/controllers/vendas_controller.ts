import Produto from '#models/produto'
import Venda from '#models/venda'
import type { HttpContext } from '@adonisjs/core/http'

export default class VendasController {
  async store({ request }: HttpContext) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { cliente_id, produto_id, quantidade } = request.only([
      'cliente_id',
      'produto_id',
      'quantidade',
    ])
    const produto = await Produto.findByOrFail('id', produto_id)
    const venda = {
      cliente_id,
      produto_id,
      preco_unitario: produto.preco,
      preco_total: produto.preco * quantidade,
      quantidade,
    }
    await Venda.create(venda)
    const newEstoque = {
      nome: produto.$original.nome,
      descricao: produto.$original.descricao,
      preco: produto.$original.preco,
      estoque: produto.$original.estoque - quantidade,
    }
    await Produto.updateOrCreate({ id: produto_id }, newEstoque)

    return {
      message: 'Venda Adicionada',
      venda: {
        cliente_id,
        preco_total: produto.preco * quantidade,
        quantidade,
        ...newEstoque,
      },
    }
  }
}
