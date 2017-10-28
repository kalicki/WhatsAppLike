import { messages } from './rapid'

export default (group, onvalue, onerror) => {
  return messages.filter({ GroupId: group }).subscribe(onvalue, onerror)
}
