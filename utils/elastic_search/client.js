import { Client } from '@elastic/elasticsearch'
import { API_KEY, CLOUD_ID } from './config'


export const  client  = new Client({
  cloud: {
    id: CLOUD_ID
  },
  auth: { apiKey: API_KEY}
})

export default client