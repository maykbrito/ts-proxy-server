import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import { apiRoutes } from './routes'

const PORT = process.env.PORT || 5454
const app = express()

app.use('/api', apiRoutes)

app.use(cors())
app.use(express.json())

app.listen(PORT, () => console.log(`🔥 Server is running on port ${PORT}`))
