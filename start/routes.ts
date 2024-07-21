const UsuariosController = () => import('#controllers/usuarios_controller')
import router from '@adonisjs/core/services/router'

router.get('/login', [UsuariosController, 'login'])
