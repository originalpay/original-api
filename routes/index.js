import express from 'express'
import imageRoutes from './image'

const router = express.Router()

/**
 * Status route
 */
router.get('/', (req, res) => res.json({ message: 'Everything operating normally.' }))

imageRoutes(router)

export default router