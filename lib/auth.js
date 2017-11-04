import { users } from './rapid'

// Create User
const createUser = (name, phone, password, onComplete) => {
  alert(name)
  return
  const newUser = {
    name: name,
    password: password,
    phone: phone,
    online: '',
    idsContacts: {},
    idsGroups: {}
  }
  users.document(phone).mutate(newUser, onComplete)
}

// Login User
const loginUser = (phone, password, onComplete) => {
  users.document(phone).subscribe(data => {
    if (data.password === password)
      return true

    return false
  }, onComplete)
}

export {createUser, loginUser}
