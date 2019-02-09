const logger = require('koa-logger')
const koaBody = require('koa-body')
const cors = require('@koa/cors')
const serve = require('koa-static');

const db = require('./models')
const router = require('./routes')

const Koa = require('koa')

const app = new Koa()

const PORT = 3000

app.use(cors())

app.use(logger())

app.use(koaBody())

app.use(db)
app.use(router.routes())

app.use(serve(__dirname + '/public'))

const server = app.listen(PORT).on("error", err => {
  console.error(err);
});
module.exports = server;


//app.listen(PORT)
