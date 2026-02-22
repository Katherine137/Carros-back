import { Router } from "express";
import { actualizarVehiculos, crearVehiculos, eliminarVehiculos, listarVehiculos, obtenerVehiculosPorID } from "../controllers/vehiculos_controller.js";
const router = Router()

router.post('/Vehiculos', crearVehiculos)
router.get('/listarVe', listarVehiculos)
router.get('/obtenerVe/:id', obtenerVehiculosPorID)
router.put('/actualizarVe/:id', actualizarVehiculos)
router.delete('/eliminarVe/:id', eliminarVehiculos)

export default router