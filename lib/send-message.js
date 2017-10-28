import { groups, messages, name } from './rapid'

const sendMessage = async (group, text) => {
  // content of new message
  const message = {
    GroupId: group,
    senderName: name,
    sentDate: Date.now(),
    text
  }

  // reference of new document for the message
  const newMessage = messages.newDocument()

  // mutate content of the new message document
  await newMessage.mutate(message)

  // mutate group with info about last message
  // that contains id of document with new message
  // and text of the new message
  await groups
    .document(group)
    .merge({
      lastMessage: {
        id: newMessage.id,
        text,
      }
    })
}

export default sendMessage
