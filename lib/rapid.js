import rapid from 'rapid-io'
import { randanimalSync } from 'randanimal'

const API_KEY = 'ZW05d2k4ajh1dHd3aDIuYXBwLXJhcGlkLmlv' // paste your API key here

const client = rapid.createClient(API_KEY)

export default client
export const groups = client.collection("groups")
export const messages = client.collection("messages")
export const users = client.collection("users")
export const name = randanimalSync()
