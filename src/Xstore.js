// Xstore (including filename), x, y, addX and xCount are all placeholder names
import { observable, action, computed } from 'mobx'

class Xstore {
 
 @observable x = []

 @action addX = (y) => {
  this.x.push(y)
 }

 @computed get xCount() {
  return this.x.length
 }
}

const store = new Xstore()
export default store
