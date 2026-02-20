//modulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import UsuarioRoutes from './routers/usuarios_routes.js'
import VehiculoRoutes from './routers/vehiculos_routes.js'
import ClientesRoutes from './routers/clientes_routes.js'
import ReservasRoutes from './routers/reservas_routes.js'

//inicializaciones
const app = express()
dotenv.config()
//middlewares
app.use(express.json())
app.use(cors())
//variables globales
app.set('port',process.env.PORT || 6000)
//rutas
app.get('/',(req,res)=> res.send("SERVER ON"))
//ruta usuarios
app.use('/api/Usuarios', UsuarioRoutes)
//ruta vehiculos
app.use('/api/Vehiculos', VehiculoRoutes)
//ruta clientes
app.use('/api/Clientes', ClientesRoutes)
//ruta reservas
app.use('/api/Reservas', ReservasRoutes)
//exportar instancia express - app
export default app