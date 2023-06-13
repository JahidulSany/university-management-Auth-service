/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes/index'
const app: Application = express()

// Cors
app.use(cors())

// Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/', routes)

// Testing
// eslint-disable-next-line no-unused-vars
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing Error Logger!!')
// })

// Global Error handler
app.use(globalErrorHandler)

export default app
