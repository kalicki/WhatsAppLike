import { users } from './rapid'

export default (onvalue, onerror) => {
  /*
  users.subscribe(toDos => {
    // TODO: update user interface
    console.log("test" + toDos)
  }, error => {
    // once the error block is called the subscription is automatically canceled
    // and will no longer receive and updates
    if (err.type === 'permission-denied') {
      console.log(err.message) // you are not allowed to access data
    }
  })
  */

  return users.subscribe(onvalue, onerror)
}
