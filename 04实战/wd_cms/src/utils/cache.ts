enum CacheType {
  session = 1,
  local = 2
}
class StorageCache {
  storage: any
  constructor(type: CacheType) {
    if (type === CacheType.session) {
      this.storage = window.sessionStorage
    } else {
      this.storage = window.localStorage
    }
  }

  set(key: string, value: any) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  get(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
    return null
  }

  remove(key: string) {
    this.storage.removeItem(key)
  }
}

export const sessionCache = new StorageCache(CacheType.session)
export const localCache = new StorageCache(CacheType.local)
