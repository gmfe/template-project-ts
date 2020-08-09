import { action, observable } from 'mobx'

class GlobalStore {
  @observable
  name: string = ''

  @action
  setName(name: string) {
    this.name = name

    // for babel-plugin-mobx-deep-action
    // 不用手动 action()
    setTimeout(() => {
      this.name = 'async ' + name
    }, 3000)
  }
}

export default new GlobalStore()
