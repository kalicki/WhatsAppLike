import { messages } from './rapid'

export default (Group, onvalue, onerror) => {
  return messages.filter({ GroupId: Group }).subscribe(onvalue, onerror)
}
