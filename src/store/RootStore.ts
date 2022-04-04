import { TokensStore } from './Tokens'

export class RootStore {
  tokens: TokensStore

  constructor() {
    this.tokens = new TokensStore(this)
  }
}

export const root = new RootStore()
