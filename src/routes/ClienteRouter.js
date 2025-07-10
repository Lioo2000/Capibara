import {Router} from 'express'
const router = Router()
import ClienteService from '../services/ClienteService.js'
const Cliente = new ClienteService()

router.get('/',async(req,res) => {
    try {
        const clientes = await Cliente.obtenerClientes()
        return res.status(200).json(clientes)
    } catch (error) {
        console.log(error.message)
    }
})

export default router