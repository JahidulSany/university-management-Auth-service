import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorLogger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🛢️ Database is connected successfully!!`)

    app.listen(config.port, () => {
      logger.info(`Application is running on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error(`failed to connect Database, ${err}`)
  }
}

main()
