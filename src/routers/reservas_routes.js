import { Router } from "express";
import { actualizarReservas, crearReservas, eliminarReservas, listarReservas } from "../controllers/reservas_controller.js";
const router = Router()

router.post('/Reservas', crearReservas)
router.get('/listarRe', listarReservas)
router.put('/actualizarRe/:id', actualizarReservas)
router.delete('/eliminarRe/:id', eliminarReservas)

export default router