// const UsuariosController = () => import('#controllers/usuarios_controller')
// import router from '@adonisjs/core/services/router'

// router.post('login', [UsuariosController, 'login'])
const UsuariosController = () => import('#controllers/usuarios_controller')
import router from '@adonisjs/core/services/router'

router.post('/login', [UsuariosController, 'login'])
