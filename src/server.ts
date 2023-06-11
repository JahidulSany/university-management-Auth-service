/* eslint-disable no-console */
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorlogger, logger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', error => {
  errorlogger.error(error)
  process.exit(1)
})

let server: Server

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🛢️ Database is connected successfully!!`)

    server = app.listen(config.port, () => {
      logger.info(`Application is running on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error(`failed to connect Database, ${err}`)
  }

  process.on('unhandledRejection', error => {
    console.log('Unhandled Rejection is detected, we are closing out server!')

    if (server) {
      server.close(() => {
        errorlogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })

  process.on('SIGTERM', () => {
    logger.info('SIGTERM is received!')
    if (server) {
      server.close()
    }
  })
}

main()
