import vine from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    senha: vine.string().minLength(2).maxLength(32),
  })
)

export const registerValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .unique(async (query, field) => {
        const user = await query.from('usuarios').where('email', field).first()
        return !user
      }),
    senha: vine.string().minLength(2).maxLength(512),
  })
)
