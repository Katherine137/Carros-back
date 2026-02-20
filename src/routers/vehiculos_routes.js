import { Router } from "express";
import { actualizarVehiculos, crearVehiculos, eliminarVehiculos, listarVehiculos, obtenerVehiculosPorID } from "../controllers/vehiculos_controller.js";
const router = Router()

router.post('/Vehiculos', crearVehiculos)
router.get('/listarVe', listarVehiculos)
router.get('obtenerVe', obtenerVehiculosPorID)
router.put('/actualizarVe', actualizarVehiculos)
router.delete('/eliminarVe', eliminarVehiculos)

export default router