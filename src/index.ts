import { serve } from '@hono/node-server'
import { webhookDecardController } from './webhook/webhookDecardController'
import { app } from './config/app'

webhookDecardController()

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  },
)
