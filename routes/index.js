import express from 'express'
import imageRoutes from './image'
import paymentsRoutes from './payments'

const router = express.Router()

/**
 * Status route
 */
router.get('/', (req, res) => res.json({ message: 'Everything operating normally.' }))

imageRoutes(router)
paymentsRoutes(router)

export default router