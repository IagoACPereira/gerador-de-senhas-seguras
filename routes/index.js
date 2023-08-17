import express from 'express'
import Controlador from '../controllers/index.js'

const router = express.Router()

router.get("/", Controlador.rotaInicial)
router.get("/gerar-senha/:frase", Controlador.gerarSenha)

export default router