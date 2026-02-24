import { Router } from "express";
import { actualizarReservas, crearReservas, eliminarReservas, listarReservas, obtenerReservasPorID } from "../controllers/reservas_controller.js";
const router = Router()

router.post('/Reservas', crearReservas)
router.get('/listarRe', listarReservas)
router.get('/obtenerRe', obtenerReservasPorID)
router.put('/actualizarRe/:id', actualizarReservas)
router.delete('/eliminarRe/:id', eliminarReservas)

export default router