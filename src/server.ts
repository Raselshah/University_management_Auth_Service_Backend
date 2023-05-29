import mongoose from 'mongoose'
import app from './api'
import config from './config/index'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`UM server is running`)
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.database_url}`)
    })
  } catch (err: any) {
    console.error(` ${err.message}`)
  }
}

main().catch(err => console.log(err.message))
