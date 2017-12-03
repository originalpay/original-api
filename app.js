
import express from 'express'
import bodyParser from 'body-parser'

import router from './routes'

const app = express()
app.set('port', (process.env.PORT || 3000));

/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PATCH,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
*/

app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: true, uploadDir: '/tmp/uploads', limit: '10mb' }))

app.use(router)

app.listen(
  app.get('port'),
  () => console.log('Server started motherfucker... at', app.get('port'))
)

export default app