import cors from 'cors'

const ACCEPTED_ORIGINS = ['http://raizo-ecommerce.netlify.app', 'https://raizo-ecommerce.netlify.app']

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (!origin || ACCEPTED_ORIGINS.includes(origin)) { callback(null, true); return }

    callback(new Error('Not Allowed by CORS'))
  }
})
