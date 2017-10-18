import { groups } from './rapid'

const createGroup = (name, onComplete) => {
  const lastMessage = {
    lastMessage: {
      id: '',
      text: '',
    },
  }

  groups.document(name).mutate(lastMessage, onComplete)
}

export default createGroup
