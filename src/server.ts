import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`🛢️ Database is connected successfully!!`)

    app.listen(config.port, () => {
      console.log(`Application is running on port ${config.port}`)
    })
  } catch (err) {
    console.log(`failed to connect Database, ${err}`)
  }
}

main()
