import cors from 'cors'
import express, { Application, Request, Response } from 'express'
const app: Application = express()

// Cors
app.use(cors())

// Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully!!')
})

export default app
