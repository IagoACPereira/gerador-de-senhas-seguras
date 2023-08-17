import express from "express"
import router from './routes/index.js'

const app = express()
const port = 3000

app.use(router)
app.use((req, res, next) => {
  res.status(404).json({
    mensagem: 'Rota não encotrada!',
    status: 404
  })
})

app.listen(port, () => {
  console.log(`Servidor escutando porta ${port}`);
})