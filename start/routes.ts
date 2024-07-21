const UsuariosController = () => import('#controllers/usuarios_controller')
const ClientesController = () => import('#controllers/clientes_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const VendasController = () => import('#controllers/vendas_controller')
const ProdutosController = () => import('#controllers/produtos_controller')

router.post('/login', [UsuariosController, 'login'])
router.post('/signup', [UsuariosController, 'cadastro'])

router.get('/clientes', [ClientesController, 'index']).use(middleware.auth())
router.get('/clientes/:id', [ClientesController, 'show']).use(middleware.auth())
router.post('/clientes', [ClientesController, 'add']).use(middleware.auth())
router.put('/clientes/:id', [ClientesController, 'update']).use(middleware.auth())
router.delete('/clientes/:id', [ClientesController, 'delete']).use(middleware.auth())

router.get('/produtos', [ProdutosController, 'index']).use(middleware.auth())
router.get('/produtos/:id', [ProdutosController, 'show']).use(middleware.auth())
router.post('/produtos', [ProdutosController, 'store']).use(middleware.auth())
router.put('/produtos/:id', [ProdutosController, 'update']).use(middleware.auth())
router.delete('/produtos/:id', [ProdutosController, 'delete']).use(middleware.auth())

router.post('/venda', [VendasController, 'store']).use(middleware.auth())
