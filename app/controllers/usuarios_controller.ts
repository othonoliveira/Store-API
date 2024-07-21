import Usuario from '#models/usuario'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsuariosController {
  async login({ request }: HttpContext) {
    try {
      const data = request.only(['email', 'senha'])
      const validEmail = await Usuario.findByOrFail(data)
      await Usuario.findByOrFail(data)
      const token = await Usuario.accessTokens.create(validEmail)
      return {
        type: 'bearer',
        token: token.value!.release(),
      }
    } catch {
      return { message: 'Credenciais Invalidas' }
    }
  }
}
