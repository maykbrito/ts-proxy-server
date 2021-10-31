import { Router } from 'express'
const apiRoutes = Router()

apiRoutes.get('/', (req, res) => res.json({ message: '🎉' }))

export { apiRoutes }
