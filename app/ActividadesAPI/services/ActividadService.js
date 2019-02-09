module.exports = {

  async transact(ctx){
    try {
      ctx.body = {                
        data: 'ok',
        response_code: "OK"
      }
    } catch (error) {
      
    }
  },
  async getActividadesbyEstado(ctx) {
    try {
      let estado = ctx.params.estado
      const Actividades = await ctx.app.db.Actividad.
      findAll({
        where: {
          estado: estado
        },
      })
      let actividades = Actividades
      ctx.body = {
        data: actividades,
        response: "Ok"
      }
    } catch (e) {
      ctx.body = {
        error: e,
        response: "Err"
      }
      ctx.throw(500)
    }
  },

  async getAllActividades(ctx) {
    try {
      const Actividades = await ctx.app.db.Actividad.findAll()
      let actividades = Actividades
      ctx.body = {
        data: actividades,
        response: "Ok"
      }
    } catch (e) {
      ctx.body = {
        error: e,
        response: "Err"
      }
      ctx.throw(500)
    }
  },

  async create(ctx) {
    const response = {}
    let newActividad = ctx.request.body.Actividad

    try {
      newActividad = await ActividadSchema.validate(newActividad, {
            abortEarly: false
        })
    } catch (err) {
        response.errors = err.errors
    }
    if (!response.errors) {
        try {
            const actividad = ctx.app.db.Actividad.build(newActividad)
            response.actividad = await actividad.save()
            response.status = 'OK'
        } catch (err) {
            throw err
        }
    }
    ctx.body = response
  },

  async create(ctx) {
    const response = {}
    let newActividad = ctx.request.body.Actividad

    try {
      newActividad = await ActividadSchema.validate(newActividad, {
            abortEarly: false
        })
    } catch (err) {
        response.errors = err.errors
    }
    if (!response.errors) {
        try {
            const actividad = ctx.app.db.Actividad.build(newActividad)
            response.actividad = await actividad.save()
            response.status = 'OK'
        } catch (err) {
            throw err
        }
    }
    ctx.body = response
  },

  async update(ctx) {
    try {
      var actividad = ctx.request.body.Actividad
      let actividadId = ctx.params.id_actividad

      let updateActividad= await ctx.app.db.Actividad.
      update(actividad, {
        where: {
          id_actividad: actividadId
        }
      })

      let findActividad = await ctx.app.db.Actividad.
      findById(actividadId)

      ctx.body = {
        data: findActividad,
        response: "Ok"
      }
    } catch (e) {
      ctx.status = 500
      ctx.body = {
        error: e,
        response: "Err",
        message: e.message
      }
    }
  },

  async delete(ctx) {
    try {
      let actividadId = ctx.params.id_actividad

      const actividadDeleted = await ctx.app.db.Actividad.destroy({
        where: {
          id_actividad: actividadId
        }
      });

      ctx.body = {
      data:actividadDeleted,
      response: "Ok"
      }
    } 
    catch (e) {
      ctx.status = 500
      ctx.body = {
      error: e,
      response: "Err",
      message: e.message
      }
    }
  }
}