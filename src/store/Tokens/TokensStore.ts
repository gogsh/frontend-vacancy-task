import { makeObservable, observable } from 'mobx'

import type { RootStore } from '../RootStore'

export class TokensStore {
  root: RootStore

  constructor(root: RootStore) {
    makeObservable(this, {})

    this.root = root
  }
}
