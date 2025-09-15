import dotenv from 'dotenv'
dotenv.config()

export const env = {
  port: process.env.PORT || '3000',
  decard: {
    shopKey: process.env.DECARD_API_SHOP_KEY || '',
    secret: process.env.DECARD_API_SECRET || '',
    baseUrl: process.env.DECARD_BASE_URL || 'https://decard.me',
  },
}
