const Router = require('koa-router')
const ActividadService = require('../services/ActividadService')

const router = new Router ()

router.get('/actividad/getActividadesbyEstado/:estado', ActividadService.getActividadesbyEstado)
router.get('/actividad/getAllActividades', ActividadService.getAllActividades)
router.post('/actividad/create', ActividadService.create)
router.put('/actividad/update/:id_actividad', ActividadService.update)
router.delete('/actividad/delete/:id_actividad', ActividadService.delete)

module.exports = router.routes()
