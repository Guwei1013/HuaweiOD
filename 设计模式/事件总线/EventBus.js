class EventBus {
  constructor() {
    this.events = new Map()
  }

  on(key, callback) {
    const event = this.events.get(key)
    if (event) {
      event.push(callback)
    } else {
      this.events.set(key, [callback])
    }
  }

  emit(key, ...arg) {
    const event = this.events.get(key)
    if (event) {
      event.forEach((callback) => callback(...arg))
    }
  }

  off(key, callback) {
    const event = this.events.get(key)
    if (event) {
      this.events.set(key, event.filter((cb) => cb !== callback))
    }
  }
}


/*
  上述事件总线存在的缺陷
  1. 使用 Set 替代数组：
  将事件回调函数存储在 Set 数据结构中而不是数组中，这样可以避免重复添加相同的回调函数，并提高查找和删除的效率。

  2. 支持事件优先级：为事件回调函数添加优先级的概念，并按照优先级顺序执行回调函数。
  可以使用一个包含回调函数和优先级的对象来表示事件，然后使用数组存储事件，根据优先级对事件进行排序。

*/


class EventBus {
  constructor() {
    this.events = new Map()
  }
  /**
   * 注册事件订阅
   * @param {string} key 事件名称
   * @param {Function} callback 事件触发后需要执行的回调函数
   * @param {number} priority 事件的优先级，值越大优先级越高
   */
  on(key, callback, priority = 0) {
    const event = this.events.get(key)
    if (event) {
      event.push({ callback, priority })
      event.sort((a, b) => b.priority - a.priority) // 降序排列
    } else {
      this.events.set(key, new Set([{callback, priority}]))
    }
  }

  /**
   * 触发事件
   * @param {string} key 事件名称
   * @param  {...any} arg 传给事件回调函数的参数
   */
  emit(key, ...arg) {
    const event = this.events.get(key)
    if (event) {
      event.forEach(({ callback }) => {
        try {
          callback(...args)
        } catch (error) {
          // 错误处理逻辑
          console.error(error)
        }
      })
    }
  }

  /**
   * 取消事件订阅
   * @param {string} key 事件名称
   * @param  {...any} arg 传给事件回调函数的参数
   */
  off(key, callback) {
    const event = this.events.get(key)
    if (event) {
      event.delete(callback)
      // 把内存释放
      if (event.size === 0) {
        this.events.delete(key)
      }
    }
  }
}
