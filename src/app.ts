import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userRouters from './app/modules/users/users.route'
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

app.use('/api/v1/users/', userRouters)

export default app
