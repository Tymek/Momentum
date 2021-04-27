import 'dotenv/config'
import { version } from 'package.json'

export default {
  name: 'Momentum',
  version,
  extra: {
    apiUrl: process.env.API_URL || 'http://localhost:8080/graphql',
  },
}
