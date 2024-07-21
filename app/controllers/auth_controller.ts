import Usuario from '#models/usuario'
import { loginValidator, registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async login({ request, response }: HttpContext) {
    const { email, senha } = await request.validateUsing(loginValidator)

    const user = await Usuario.findBy('email', email)
    if (!user) {
      response.abort('Invalid credentials')
    }
    const token = await Usuario.accessTokens.create(user)

    return response.ok({
      token: token,
      ...user.serialize(),
    })
  }
  async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(registerValidator)

    const user = await Usuario.create(payload)

    return response.created(user)
  }
}
