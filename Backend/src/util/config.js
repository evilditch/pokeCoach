import * as dotenv from 'dotenv'
dotenv.config()

export const DATA_URL = process.env.DATA_URL
export const AUTH_URL = process.env.AUTH_URL
export const PORT = process.env.PORT || 3001