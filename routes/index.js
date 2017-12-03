import express from 'express'
import imageRoutes from './image'

const router = express.Router()

imageRoutes(router)

export default router