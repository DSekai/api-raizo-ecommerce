import cors from 'cors'

const ACCEPTED_ORIGINS = ['http://sekaidev.netlify.app', 'https://sekaidev.netlify.app', 'https://sekaidev.com', 'https://www.sekaidev.com', 'http://www.sekaidev.com', 'http://sekaidev.com', 'http://www.port.sekaidev.com', 'http://port.sekaidev.com']

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (!origin || ACCEPTED_ORIGINS.includes(origin)) { callback(null, true); return }

    callback(new Error('Not Allowed by CORS'))
  }
})
