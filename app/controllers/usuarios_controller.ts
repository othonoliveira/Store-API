import Usuario from '#models/usuario'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsuariosController {
  async login({ request, response }: HttpContext) {
    try {
      const { email, senha } = request.only(['email', 'senha'])
      const validEmail = await Usuario.findByOrFail({ email })
      await Usuario.findByOrFail({ senha })
      const token = await Usuario.accessTokens.create(validEmail)
      return {
        type: 'bearer',
        token: token.value!.release(),
      }
    } catch {
      return response.status(500).json({ message: 'Credenciais Invalidas' })
    }
  }

  async cadastro({ request, response }: HttpContext) {
    try {
      const data = request.only(['email', 'senha'])
      const user = await Usuario.create(data)
      return user
    } catch {
      return response.status(500).json({ message: 'Usuario já cadastrado' })
    }
  }
}
