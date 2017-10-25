import { groups } from './rapid'

export default (onvalue, onerror) => {
  return groups.subscribe(onvalue, onerror)
}
