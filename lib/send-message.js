import { groups, messages, users } from './rapid'

const sendMessage = async (group, content) => {
  // content of new message
  const message = {
    GroupId: group,
    idEmisor: users.id,
    sentDate: Date.now(),
    content
  }

  // reference of new document for the message
  const newMessage = messages.newDocument()

  // mutate content of the new message document
  await newMessage.mutate(message)

  // mutate group with info about last message
  // that contains id of document with new message
  // and content of the new message
  await groups
    .document(group)
    .merge({
      lastMessage: {
        id: newMessage.id,
        content,
      }
    })
}

export default sendMessage
