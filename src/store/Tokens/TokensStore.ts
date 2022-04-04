import { makeObservable, observable, action, computed } from 'mobx'

import { tokens, categories } from './tokens'
import type { Token, Category } from './tokens'

import type { RootStore } from '../RootStore'

export class TokensStore {
  root: RootStore
  /** Активные фильтры */
  activeFilter: Category = categories[0]
  /** Список токенов */
  items: Token[] = tokens

  /** Получить отфильтрованный список токенов */
  get filteredTokens() {
    if (this.activeFilter.id === 'all') {
      return this.items
    }

    return this.items.filter((token) => token.categories.includes(this.activeFilter.id))
  }

  currentToken: Token | undefined

  constructor(root: RootStore) {
    makeObservable(this, {
      // observable
      items: observable,
      currentToken: observable,
      activeFilter: observable,
      // computed
      filteredTokens: computed,
      // action
      setCurrentToken: action,
      setActiveFilter: action,
    })

    this.root = root
  }

  setActiveFilter = (filter: Category) => {
    this.activeFilter = filter
  }

  setCurrentToken = (token: Token) => {
    this.currentToken = token
  }
}
