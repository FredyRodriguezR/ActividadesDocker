const Router = require('koa-router')
const actividades = require('./Actividad_routes')


const router = new Router()
const api = new Router()

api.use(actividades)

router.use('/api', api.routes())

module.exports = router