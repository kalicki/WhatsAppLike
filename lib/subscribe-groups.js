import { groups, contacts } from './rapid'

export default (onvalue, onerror) => {
  const valueGroups = groups.subscribe(onvalue, onerror)
  const valueContacts = groups.subscribe(onvalue, onerror)
  
  return groups.subscribe(onvalue, onerror)
}
