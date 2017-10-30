import rapid from 'rapid-io'
import { randanimalSync } from 'randanimal'

const API_KEY = 'aDJoa3Q4ajllaTN3cXguYXBwLXJhcGlkLmlv' // paste your API key here

const client = rapid.createClient(API_KEY)

export default client
export const groups = client.collection("groups")
export const messages = client.collection("messages")
export const contacts = client.collection("contacts")
export const users = client.collection("users")
export const name = randanimalSync()
