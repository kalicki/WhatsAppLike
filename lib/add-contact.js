import { users } from './rapid'

// Add Contact
const addContact = (phone, newContact, onComplete, onError) => {
  users.document(phone).merge({
    idsContacts: ...newContact
  }, onComplete)
}

export default addContact
