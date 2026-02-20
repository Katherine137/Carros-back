import { Router } from "express";
import { actualizarClientes, crearClientes, eliminarClientes, listarClientes, obtenerClientesPorID } from "../controllers/clientes_controller.js";
const router = Router()

router.post('/Clientes', crearClientes)
router.get('/listarCl', listarClientes)
router.get('/obtenerCl/:id', obtenerClientesPorID)
router.put('actualizarCl/:id', actualizarClientes)
router.delete('/eliminarCl/:id', eliminarClientes)

export default router